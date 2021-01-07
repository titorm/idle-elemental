import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { registerNewUser } from '../../application/api/methods/userApi';

import styles from './EntryScreenStyles';

function EntryScreen({ navigation }) {
    const { user } = useSelector((state) => state.user || {});

    useEffect(() => {
        (async () => {
            if (user && user.uid) {
                navigateToApplication();
            } else {
                await registerNewUser();
            }
        })();
    }, [user]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Idle Elemental',
        });
    }, [navigation]);

    const navigateToApplication = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'app' }],
        });
    };

    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}

export default EntryScreen;
