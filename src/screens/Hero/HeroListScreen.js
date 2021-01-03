import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import PageHeader from '../../components/PageHeader';

function LoginScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Idle Elemental',
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <PageHeader
                title='Hero List'
                subtitle='All your heroes managed with ease'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default LoginScreen;
