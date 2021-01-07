import React from 'react';
import { View, Text } from 'react-native';

import styles from './LibraryHeroStyles';

function LibraryHero({ hero }) {
    return (
        <View style={styles.item}>
            <Text>{hero.gameInfo.basicInfo.name} - {hero.gameInfo.category.rarity}</Text>
            <Text>{hero.playerInfo.stars} stars</Text>
            <Text>{hero.playerInfo.ascension} ascension</Text>
            <Text>{hero.playerInfo.medals} medals</Text>
        </View>
    );
}

export default LibraryHero;
