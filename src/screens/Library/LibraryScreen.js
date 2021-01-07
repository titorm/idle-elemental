import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';

import styles from './LibraryScreenStyles';

import Header from '../../components/Header';
import LibraryHeroScreen from './Hero/LibraryHeroScreen';

function LibraryScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Library',
        });
    }, [navigation]);

    return (
        <>
            <Header />
            <View style={styles.container}>
                <LibraryHeroScreen />
            </View>
        </>
    );
}

export default LibraryScreen;
