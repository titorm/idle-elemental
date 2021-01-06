import Firebase from 'firebase';
import { getDocumentData, setDocumentData, updateDocumentData, getSubCollectionData, updateSubCollectionDocumentData, addBatchSubData } from '../api';

const setPlayer = (newData) => setDocumentData('players', Firebase.auth().currentUser.uid, newData); // Only used for initial set!
const getPlayer = () => getDocumentData('players', Firebase.auth().currentUser.uid);

// const getPlayerResources = async () => {
//     const data = await getDocumentData('players', Firebase.auth().currentUser.uid);
//     return data.resources;
// };

// const getPlayerMultipliers = async () => {
//     const data = await getDocumentData('players', Firebase.auth().currentUser.uid);
//     return data.multipliers;
// };

const getPlayerHeroes = () => getSubCollectionData('players', Firebase.auth().currentUser.uid, 'heroes');
const setPlayerHeroes = (newData) => addBatchSubData('players', Firebase.auth().currentUser.uid, 'heroes', newData);

const updatePlayerMultipliers = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, { multipliers: newData });
const updatePlayerResources = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, { resources: newData });
const updatePlayerHeroes = (newData) => updateSubCollectionDocumentData('players', Firebase.auth().currentUser.uid, 'heroes', newData);

export {
    setPlayer,
    getPlayer,

    getPlayerHeroes,
    setPlayerHeroes,

    updatePlayerResources,
    updatePlayerMultipliers,
    updatePlayerHeroes,
};
