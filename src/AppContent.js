import React from 'react';
import Firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';

import Router from './application/routes/Router';

import { getGameData } from './application/services/game/gameService';
import { getCurrentPlayer, createPlayerInitialData } from './application/services/player/playerService';
// import { getCurrentPlayer, createPlayerInitialData } from './application/services/player/playerHeroService';

import { setAppLoaded } from './application/store/modules/app/actions';
import { setGameData } from './application/store/modules/game/actions';
import { setPlayerData } from './application/store/modules/player/actions';
import { setUser, setUserConfig } from './application/store/modules/user/actions';

function AppContent() {
    const dispatch = useDispatch();
    const { appLoaded } = useSelector((state) => state.app || {});

    Firebase.auth().onAuthStateChanged(async (user) => {
        if (!appLoaded) {
            setGameData(await getGameData());
            dispatch(setAppLoaded(true));
        }

        if (user && user.uid) {
            let player = await getCurrentPlayer();
            if (!player) {
                await createPlayerInitialData();
                player = await getCurrentPlayer();
            }

            Firebase.firestore().collection('players').doc(user.uid).onSnapshot(async (doc) => {
                const newData = doc.data();
                dispatch(setUserConfig(newData.config));
                dispatch(setPlayerData(newData));
            });
            Firebase.firestore().collection('players').doc(user.uid).collection('heroes')
            .onSnapshot(async (collection) => {
                collection.forEach((elem) => {
                    console.log(elem.data());
                });
                // dispatch(setPlayerHeroes());
                // setPlayer(doc.data());
            });
            // TODO unsubscribe();
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
