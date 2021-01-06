import React, { useState, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CURRENCIES } from '../../application/services/constants';

import { summon } from '../../application/services/summon/summonService';
import { generatePlayerCurrenciesOvertime } from '../../application/services/currency/currencyService';
import { getNormalSummonHeroesPrice } from '../../application/services/price/priceService';
import { setResourcesToPlayer, playerHasResource } from '../../application/services/player/playerResourceService';

import { setPlayerResources } from '../../application/store/modules/player/actions';

import styles from './SummonScreenStyles';

function SummonScreen(props) {
    const dispatch = useDispatch();
    const { navigation } = props;
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const [lastCollectedTime, setLastCollectedTime] = useState(new Date().getTime());
    const { resources, multipliers } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Summons',
        });
    }, [navigation]);

    const doSummon = async (amount = 1) => {
        const price = await getNormalSummonHeroesPrice(amount);
        if (playerHasResource(resources, price)) return; // TODO feedback!
        setSummonedHeroes(await summon(amount));
    };

    const collectResources = async () => {
        const generatedResources = await generatePlayerCurrenciesOvertime(multipliers, Math.floor((new Date().getTime() - lastCollectedTime) / 1000));
        const newResources = { ...resources };
        Object.keys(generatedResources).forEach((res) => {
            newResources[res] = (newResources[res] || 0) + (generatedResources[res] || 0);
        });
        setResourcesToPlayer(newResources).then(() => {
            dispatch(setPlayerResources(newResources));
            setLastCollectedTime(new Date().getTime());
        });
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={() => doSummon(10)}
                title='Summon 10x'
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
