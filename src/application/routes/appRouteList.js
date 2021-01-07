import React from 'react';

import icons from '../../utils/icons';

import Icon from '../../components/Icon';

import AdventureScreen from '../../screens/Adventure/AdventureScreen';
import StoreScreen from '../../screens/Store/StoreScreen';
import PlayerScreen from '../../screens/Player/PlayerScreen';

const iconTab = (color, size, name) => (
    <Icon
        color={color}
        name={name}
        size={size}
        type='regular'
    />
);

const options = (title, icon) => ({
    tabBarIcon: ({ color, size }) => iconTab(color, size, icon),
    title,
});

const privateRouteList = [
    { key: 'store', name: 'store', component: StoreScreen, options: options('Store', icons.store) },
    { key: 'adventure', name: 'adventure', component: AdventureScreen, options: options('Adventure', icons.fire) },
    { key: 'player', name: 'player', component: PlayerScreen, options: options('Player', icons.user) },
];

export default privateRouteList;
