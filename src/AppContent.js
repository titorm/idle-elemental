import React from 'react';
// import Firebase from 'firebase';
import { useDispatch } from 'react-redux';

import Router from './application/routes/Router';

import { getPlayer } from './application/api/methods/playerApi';

import { setUser, setUserRoles } from './application/store/modules/user/actions';
import { setPlayerResources, setPlayerMultipliers, setPlayerHeroes } from './application/store/modules/player/actions';

function AppContent() {
    // const dispatch = useDispatch();

    // Firebase.auth().onAuthStateChanged(async (user) => {
    //     let userConfig = null;
    //     if (user && user.uid) {
    //         const player = await getPlayer();
    //         console.log(player);
    //         // const configDoc = await Firebase.firestore().collection('players').doc(user.uid).get();
    //         // if (configDoc && configDoc.exists) {n
    //         //     userConfig = configDoc.data();
    //         // } else {
    //         //     const baseUserConfig = { roles: ['PLAYER'] };
    //         //     await Firebase.firestore().collection('config').doc(user.uid).set(baseUserConfig, { merge: true });
    //         //     userConfig = baseUserConfig;
    //         // }
    //     }

    //     // dispatch(setUser(user));
    //     // createPlayerInitialData();
    //     // dispatch(userConfig.roles);
    // });

    return (
        <Router />
    );
}

export default AppContent;
