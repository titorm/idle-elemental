import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { openNormalHeroChest } from '../../application/services/chest/chestHeroService';
import { getNormalHeroChestPrice } from '../../application/services/price/priceService';
import { addHeroMedalsToPlayer } from '../../application/services/player/playerHeroService';
import { playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';

import styles from './StoreScreenStyles';

import { keys, translate } from '../../locale';

import Header from '../../components/Header';

function StoreScreen({ navigation }) {
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const [normalChestPrice, setNormalChestPrice] = useState([]);
    const { heroes, prices, rates } = useSelector((state) => state.game || {});
    const { resources } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Store',
        });
    }, [navigation]);

    useEffect(() => {
        (async () => {
            setNormalChestPrice(await getNormalHeroChestPrice(prices, 1));
        })();
    }, [prices]);

    const openNormalChest = async (amount = 1) => {
        if (!await playerHasResource(resources, normalChestPrice)) {
            // TODO feedback!
            return;
        }
        await removePlayerResource(resources, normalChestPrice);
        const newHeroes = await openNormalHeroChest(heroes, rates, amount);
        await addHeroMedalsToPlayer(newHeroes);
        setSummonedHeroes(newHeroes);
    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                {normalChestPrice && normalChestPrice[0] && (
                    <Button
                        onPress={() => openNormalChest(1)}
                        title={`${translate(keys.NORMAL_HERO_CHEST)} (${normalChestPrice[0].amount} ${translate(keys[normalChestPrice[0].currency])})`}
                        color='#841584'
                    />
                )}

                {summonedHeroes.map((summon) => (
                    <Text key={summon.hero.id}>
                        -&nbsp;
                        {summon.hero.basicInfo.name}
                        (
                        {summon.amount}
                        {' '}
                        medals)
                    </Text>
                ))}
            </View>
        </>
    );
}

export default StoreScreen;
