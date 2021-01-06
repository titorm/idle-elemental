import React, { useState, useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';

import { CURRENCIES } from '../../application/services/constants';

import { summon } from '../../application/services/summon/summonService';
import { generatePlayerCurrenciesOvertime } from '../../application/services/currency/currencyService';

import styles from './SummonScreenStyles';

function SummonScreen(props) {
    const { navigation } = props;
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const [accumulatedResources, setAccumulatedResources] = useState({});
    const [lastCollectedTime, setLastCollectedTime] = useState(new Date().getTime());

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Summons',
        });
    }, [navigation]);

    const doSummon = async (amount = 1) => {
        setSummonedHeroes(await summon(amount));
    };

    const collectResources = async () => {
        setAccumulatedResources(await generatePlayerCurrenciesOvertime(Math.floor((new Date().getTime() - lastCollectedTime) / 1000)));
        setLastCollectedTime(new Date().getTime());
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
                Collected GOLD:&nbsp;
                {+accumulatedResources[CURRENCIES.GOLD] || 0}
            </Text>
            <Text>
                Collected XP:&nbsp;
                {+accumulatedResources[CURRENCIES.XP] || 0}
            </Text>

            <Button
                onPress={collectResources}
                title='Collect Resources'
            />
        </View>
    );
}

export default SummonScreen;
