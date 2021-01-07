import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import styles from './PlayerScreenStyles';

import Header from '../../components/Header';
import PlayerHeroScreen from './Hero/PlayerHeroScreen';

function PlayerScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Player',
        });
    }, [navigation]);

    return (
        <>
            <Header />
            <View style={styles.container}>
                <PlayerHeroScreen />
            </View>
        </>
    );
}

export default PlayerScreen;
