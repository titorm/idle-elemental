import React, { useLayoutEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CURRENCIES } from '../../application/constants/currencyConstants';

import { generatePlayerCurrenciesOvertime } from '../../application/services/currency/currencyService';
import { setResourcesToPlayer } from '../../application/services/player/playerResourceService';
import { setTimesToPlayer } from '../../application/services/player/playerTimesService';

import { setPlayerResources, setPlayerTimes } from '../../application/store/modules/player/actions';

import styles from './AdventureScreenStyles';

import Header from '../../components/Header';

function AdventureScreen({ navigation }) {
    const dispatch = useDispatch();
    const { resources, multipliers, times } = useSelector((state) => state.player || {});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Adventure',
        });
    }, [navigation]);

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

export default AdventureScreen;
