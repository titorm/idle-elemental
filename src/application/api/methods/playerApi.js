import Firebase from 'firebase';
import { getDocumentData, setDocumentData, updateDocumentData, getSubCollectionData, updateSubCollectionDocumentData, addBatchSubData } from '../api';

const setPlayer = (newData) => setDocumentData('players', Firebase.auth().currentUser.uid, newData); // Only used for initial set!

const getPlayerResources = async () => {
    const data = await getDocumentData('players', Firebase.auth().currentUser.uid);
    return data.resources;
};
const updatePlayerResources = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, newData);

const getPlayerMultipliers = async () => {
    const data = await getDocumentData('players', Firebase.auth().currentUser.uid);
    return data.multipliers;
};
const updatePlayerMultipliers = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, newData);

const getPlayerHeroes = () => getSubCollectionData('players', Firebase.auth().currentUser.uid, 'heroes');
const setPlayerHeroes = (newData) => addBatchSubData('players', Firebase.auth().currentUser.uid, 'heroes', newData);
const updatePlayerHeroes = (newData) => updateSubCollectionDocumentData('players', Firebase.auth().currentUser.uid, 'heroes', newData);

export {
    setPlayer,

    getPlayerResources,
    updatePlayerResources,

    getPlayerMultipliers,
    updatePlayerMultipliers,

    getPlayerHeroes,
    setPlayerHeroes,
    updatePlayerHeroes,
};
