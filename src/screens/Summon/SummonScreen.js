import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import { summon } from '../../application/services/summon/summonService';

function SummonScreen(props) {
    const { navigation } = props;
    const [summonedHeroes, setSummonedHeroes] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Summons',
        });
    }, [navigation]);

    const doSummon = async (amount = 1) => {
        setSummonedHeroes(await summon(amount));
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={() => doSummon(10)}
                title='Summon 10x'
                color='#841584'
            />

            {summonedHeroes.map((hero) => (
                <Text key={hero.name}>
                    -&nbsp;
                    {hero.name}
                </Text>
            ))}
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

export default SummonScreen;
