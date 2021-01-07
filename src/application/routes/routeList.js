import LoginScreen from '../../screens/Sign/LoginScreen';

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
    { key: 'login', name: 'login', component: LoginScreen, options },
    // app
    { key: 'app', name: 'app', component: AppRouter, options },
];

export default routeList;
