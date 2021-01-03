import LoginScreen from '../../screens/Sign/LoginScreen';
import HeroListScreen from '../../screens/Hero/HeroListScreen';

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
    { key: 'hero', name: 'hero', component: HeroListScreen, options },
];

export default routeList;
