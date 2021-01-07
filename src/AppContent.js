import React from 'react';
import Firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import Router from './application/routes/Router';

import { getCurrentPlayer, getCurrentPlayerHeroes, createPlayerInitialData } from './application/services/player/playerService';

import { setUser, setUserConfig } from './application/store/modules/user/actions';
import { setPlayerResources, setPlayerMultipliers, setPlayerTimes, setPlayerHeroes } from './application/store/modules/player/actions';

function AppContent() {
    const dispatch = useDispatch();

    Firebase.auth().onAuthStateChanged(async (user) => {
        console.log(user);
        if (user && user.uid) {
            let player = await getCurrentPlayer();
            if (!player) {
                await createPlayerInitialData();
                player = await getCurrentPlayer();
            }

            dispatch(setUserConfig(player.config));
            dispatch(setPlayerResources(player.resources));
            dispatch(setPlayerMultipliers(player.multipliers));
            dispatch(setPlayerTimes(player.times));
            dispatch(setPlayerHeroes(await getCurrentPlayerHeroes()));
        }

        dispatch(setUser(user));
    });

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}

export default AppContent;
