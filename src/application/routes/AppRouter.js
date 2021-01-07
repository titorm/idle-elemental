import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import appRouteList from './appRouteList';

const Tab = createBottomTabNavigator();

const optionsNavigation = {
    keyboardHidesTabBar: true,
    activeBackgroundColor: 'white',
    // TODO temporário até lembrar como fazer para o SafeAreaView também ficar em verde
    activeTintColor: 'green',
    labelStyle: {
        // fontFamily: typography.fontFamily.regular,
    },
    inactiveBackgroundColor: 'white',
    inactiveTintColor: 'gray',
    showInactiveLabel: false,
    style: {
        borderTopWidth: 0.2,
        borderTopColor: 'white',
        paddingVertical: 2,
        backgroundColor: 'white',
        // ...Platform.select(elevation),
    },
};

function AppRouter(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Manager',
        });
    }, [navigation]);

    function renderScreen({ key, name, component, options }) {
        return (
            <Tab.Screen
                key={key}
                name={name}
                component={component}
                options={options}
            />
        );
    }

    function renderRoutes() {
        return appRouteList.map(renderScreen);
    }

    return (
        <Tab.Navigator tabBarOptions={optionsNavigation}>
            {renderRoutes()}
        </Tab.Navigator>
    );
}

export default AppRouter;
