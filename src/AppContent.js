import React from 'react';
import Firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';

import Router from './application/routes/Router';

import { getGameData } from './application/services/game/gameService';
import { getCurrentPlayer, createPlayerInitialData } from './application/services/player/playerService';
import { mergeGameAndPlayerHeroes } from './application/services/player/playerHeroService';

import { setAppLoaded } from './application/store/modules/app/actions';
import { setGameData } from './application/store/modules/game/actions';
import { setPlayerData, setPlayerHeroes } from './application/store/modules/player/actions';
import { setUser, setUserConfig } from './application/store/modules/user/actions';

function AppContent() {
    const dispatch = useDispatch();
    const { appLoaded } = useSelector((state) => state.app || {});
    const { heroes } = useSelector((state) => state.game || {});

    Firebase.auth().onAuthStateChanged(async (user) => {
        if (!appLoaded) {
            dispatch(setGameData(await getGameData()));
            dispatch(setAppLoaded(true));
        }

        if (user && user.uid) {
            let player = await getCurrentPlayer();
            if (!player) {
                await createPlayerInitialData();
                player = await getCurrentPlayer();
            }

            createListeners(user.uid);
        }

        dispatch(setUser(user));
    });

    const createListeners = (userID) => {
        const userDoc = Firebase.firestore().collection('players').doc(userID);
        userDoc.onSnapshot(async (doc) => {
            const newData = doc.data();
            dispatch(setUserConfig(newData.config));
            dispatch(setPlayerData(newData));
        });
        userDoc.collection('heroes').onSnapshot((collection) => {
            const playerHeroes = [];
            collection.forEach((elem) => {
                playerHeroes.push({ id: elem.id, ...elem.data() });
            });
            const mergedHeroes = mergeGameAndPlayerHeroes(heroes, playerHeroes);
            dispatch(setPlayerHeroes(mergedHeroes));
        });
        // TODO unsubscribe();
    };

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}

export default AppContent;
