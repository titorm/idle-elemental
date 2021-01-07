import React from 'react';

import icons from '../../utils/icons';

import Icon from '../../components/Icon';

import SummonScreen from '../../screens/Summon/SummonScreen';

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
    { key: 'summon', name: 'summon', component: SummonScreen, options: options('Summon', icons.users) },
];

export default privateRouteList;
