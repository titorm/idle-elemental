import 'react-native-gesture-handler';
import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store from './application/store/store';

import AppContent from './AppContent';

function App() {
    return (
        <Provider store={store.store}>
            {/* <PersistGate
                loading={null}
                persistor={store.persistor}
            > */}
            <AppContent />
            {/* </PersistGate> */}
        </Provider>
    );
}

export default App;
