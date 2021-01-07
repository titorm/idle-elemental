import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// import { openNormalHeroChest } from '../../application/services/chest/chestHeroService';
// import { getNormalHeroChestPrice } from '../../application/services/price/priceService';
// import { playerHasResource, removePlayerResource } from '../../application/services/player/playerResourceService';

// import { setPlayerResources } from '../../application/store/modules/player/actions';

function PlayerHeroScreen() {
    const dispatch = useDispatch();
    const [summonedHeroes, setSummonedHeroes] = useState([]);
    const { resources } = useSelector((state) => state.player || {});

    return (
        <View>
            <Text>hero list</Text>
        </View>
    );
}

export default PlayerHeroScreen;
