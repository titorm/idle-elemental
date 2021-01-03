/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Router from './application/routes/Router';

import store from './application/store/store';

function App() {
    return (
        <Provider store={store.store}>
            {/* <PersistGate
                loading={null}
                persistor={store.persistor}
            > */}
            <NavigationContainer>
                <Router />
            </NavigationContainer>
            {/* </PersistGate> */}
        </Provider>
    );
}

export default App;