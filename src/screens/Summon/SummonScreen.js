import React, { useState, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CURRENCIES } from '../../application/services/constants';

import { summon } from '../../application/services/summon/summonService';
import { generatePlayerCurrenciesOvertime } from '../../application/services/currency/currencyService';
import { getNormalSummonHeroesPrice } from '../../application/services/price/priceService';
import { setResourcesToPlayer, playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';
import { setTimesToPlayer } from '../../application/services/player/playerTimesService';

import { setPlayerResources, setPlayerTimes } from '../../application/store/modules/player/actions';

import styles from './SummonScreenStyles';

function SummonScreen(props) {
    const dispatch = useDispatch();
    const { navigation } = props;
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const { resources, multipliers, times } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Summons',
        });
    }, [navigation]);

    const doSummon = async (amount = 1) => {
        const price = await getNormalSummonHeroesPrice(amount);
        if (!playerHasResource(resources, price)) {
            // TODO feedback!
            return;
        }
        const newResources = removePlayerResource(resources, price);
        dispatch(setPlayerResources(newResources));

        const heroes = await summon(amount);
        setSummonedHeroes(heroes);
    };

    const collectResources = async () => {
        const now = new Date().getTime();
        const generatedResources = await generatePlayerCurrenciesOvertime(multipliers, Math.floor((now - times.lastCollect) / 1000));
        const newResources = { ...resources };
        const newTimes = { ...times, lastCollect: now };
        Object.keys(generatedResources).forEach((res) => {
            newResources[res] = (newResources[res] || 0) + (generatedResources[res] || 0);
        });

        await setResourcesToPlayer(newResources);
        await setTimesToPlayer(newTimes);
        dispatch(setPlayerResources(newResources));
        dispatch(setPlayerTimes(newTimes));
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={() => doSummon(1)}
                title='Summon 1x (300 Diamond)'
                color='#841584'
            />
            <Button
                onPress={() => doSummon(10)}
                title='Summon 10x (2700 Diamond)'
                color='#841584'
            />

            {summonedHeroes.map((hero) => (
                <Text key={hero.id}>
                    -&nbsp;
                    {hero.basicInfo.name}
                </Text>
            ))}

            <Text>
                Diamonds:&nbsp;
                {resources[CURRENCIES.DIAMOND] || 0}
            </Text>
            <Text>
                Gold:&nbsp;
                {resources[CURRENCIES.GOLD] || 0}
            </Text>
            <Text>
                XP:&nbsp;
                {resources[CURRENCIES.XP] || 0}
            </Text>

            <Button
                onPress={collectResources}
                title='Collect Resources'
            />
        </View>
    );
}

export default SummonScreen;
