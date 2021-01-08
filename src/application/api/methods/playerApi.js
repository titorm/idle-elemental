import Firebase from 'firebase';
import { getDocumentData, setDocumentData, updateDocumentData } from '../api';

const setPlayer = (newData) => setDocumentData('players', Firebase.auth().currentUser.uid, newData); // Only used for initial set!
const getPlayer = () => getDocumentData('players', Firebase.auth().currentUser.uid);

const updatePlayerMultipliers = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, { multipliers: newData });
const updatePlayerResources = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, { resources: newData });
const updatePlayerTimes = (newData) => updateDocumentData('players', Firebase.auth().currentUser.uid, { times: newData });

export {
    setPlayer,
    getPlayer,

    updatePlayerResources,
    updatePlayerMultipliers,
    updatePlayerTimes,
};
