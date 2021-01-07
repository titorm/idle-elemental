import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import LibraryHero from '../../../components/Hero/LibraryHero';

function LibraryHeroScreen() {
    const { heroes } = useSelector((state) => state.player || {});

    return (
        <View>
            {heroes.map((hero) => (
                <LibraryHero
                    key={hero.id}
                    hero={hero}
                />
            ))}
        </View>
    );
}

export default LibraryHeroScreen;
