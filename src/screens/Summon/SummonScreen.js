import React, { useState, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CURRENCIES } from '../../application/constants/currencyConstants';

import { openNormalHeroChest } from '../../application/services/chest/chestHeroService';
import { generatePlayerCurrenciesOvertime } from '../../application/services/currency/currencyService';
import { getNormalHeroChestPrice } from '../../application/services/price/priceService';
import { setResourcesToPlayer, playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';
import { setTimesToPlayer } from '../../application/services/player/playerTimesService';

import { setPlayerResources, setPlayerTimes } from '../../application/store/modules/player/actions';

import styles from './SummonScreenStyles';

import Header from '../../components/Header';

function SummonScreen({ navigation }) {
    const dispatch = useDispatch();
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const { resources, multipliers, times } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Summons',
        });
    }, [navigation]);

    const openNormalChest = async (amount = 1) => {
        const price = await getNormalHeroChestPrice(amount);
        if (!playerHasResource(resources, price)) {
            // TODO feedback!
            return;
        }
        const newResources = await removePlayerResource(resources, price);
        dispatch(setPlayerResources(newResources));

        const heroes = await openNormalHeroChest(amount);
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
        <>
            <Header />
            <View style={styles.container}>
                <Button
                    onPress={() => openNormalChest(1)}
                    title='Buy Normal Chest (100 Diamond)'
                    color='#841584'
                />

                {summonedHeroes.map((summon) => (
                    <Text key={summon.hero.id}>
                        -&nbsp;
                        {summon.hero.basicInfo.name}
                        ({summon.amount} medals)
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
        </>
    );
}

export default SummonScreen;
