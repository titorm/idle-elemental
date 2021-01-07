import AuthScreen from '../../screens/Auth/AuthScreen';

import AppRouter from './AppRouter';

const options = {
    headerStyle: {
        backgroundColor: 'green',
    },
    headerTitleStyle: {
        color: 'white',
        fontWeight: '500',
    },
};

const routeList = [
    // public
    { key: 'auth', name: 'auth', component: AuthScreen, options },
    // app
    { key: 'app', name: 'app', component: AppRouter, options },
];

export default routeList;
