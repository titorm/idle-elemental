import LoginScreen from '../../screens/Sign/LoginScreen';
import SummonScreen from '../../screens/Summon/SummonScreen';

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
    { key: 'summon', name: 'summon', component: SummonScreen, options },
];

export default routeList;
