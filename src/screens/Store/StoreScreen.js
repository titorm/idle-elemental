import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { openNormalHeroChest } from '../../application/services/chest/chestHeroService';
import { getNormalHeroChestPrice } from '../../application/services/price/priceService';
import { addHeroMedalsToPlayer } from '../../application/services/player/playerHeroService';
import { playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';

import { setPlayerResources } from '../../application/store/modules/player/actions';

import styles from './StoreScreenStyles';

import { keys, translate } from '../../locale';

import Header from '../../components/Header';

function StoreScreen({ navigation }) {
    const dispatch = useDispatch();
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const [normalChestPrice, setNormalChestPrice] = useState([]);
    const { resources } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Store',
        });
    }, [navigation]);

    useEffect(() => {
        (async () => {
            setNormalChestPrice(await getNormalHeroChestPrice(1));
        })();
    }, []);

    const openNormalChest = async (amount = 1) => {
        const price = await getNormalHeroChestPrice(amount);
        if (!playerHasResource(resources, price)) {
            // TODO feedback!
            return;
        }
        // TODO remove dispatch and listen to database (or do the opposite)
        const newResources = await removePlayerResource(resources, price);
        dispatch(setPlayerResources(newResources));

        const heroes = await openNormalHeroChest(amount);
        await addHeroMedalsToPlayer(heroes);
        setSummonedHeroes(heroes);
    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                {!!normalChestPrice[0] && (
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
