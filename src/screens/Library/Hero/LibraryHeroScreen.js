import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import { openNormalHeroChest } from '../../application/services/chest/chestHeroService';
// import { getNormalHeroChestPrice } from '../../application/services/price/priceService';
// import { playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';

// import { setPlayerResources } from '../../application/store/modules/player/actions';

function LibraryHeroScreen() {
    const dispatch = useDispatch();
    const { heroes } = useSelector((state) => state.player || {});

    return (
        <View>
            {heroes.map((hero) => (
                <Text>{hero.basicInfo.name}</Text>
            ))}
        </View>
    );
}

export default LibraryHeroScreen;
