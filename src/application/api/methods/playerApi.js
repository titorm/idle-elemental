import { getDocumentData, setDocumentData } from '../api';

const getPlayerHeroes = (user) => getDocumentData('player_heroes', user.uid);
const setPlayerHeroes = (user, newData) => setDocumentData('player_heroes', user.uid, newData);

const getPlayerResources = (user) => getDocumentData('player_resources', user.uid);
const setPlayerResources = (user, newData) => getDocumentData('player_resources', user.uid, newData);

export {
    getPlayerHeroes,
    setPlayerHeroes,

    getPlayerResources,
    setPlayerResources,
};
