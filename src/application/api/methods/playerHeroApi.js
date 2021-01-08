import Firebase from 'firebase';
import { getSubCollectionData, setSubCollectionDocumentData, updateSubCollectionDocumentData, incrementSubCollectionDocumentData, addBatchSubData } from '../api';

const getPlayerHeroes = () => getSubCollectionData('players', Firebase.auth().currentUser.uid, 'heroes');
const setPlayerHeroes = (newData) => addBatchSubData('players', Firebase.auth().currentUser.uid, 'heroes', newData);
const updatePlayerHeroes = (newData) => updateSubCollectionDocumentData('players', Firebase.auth().currentUser.uid, 'heroes', newData);
const incrementPlayerHeroData = (id, field, amount) => incrementSubCollectionDocumentData('players', Firebase.auth().currentUser.uid, 'heroes', id, field, amount);
const addPlayerHero = (id, newData) => setSubCollectionDocumentData('players', Firebase.auth().currentUser.uid, 'heroes', id, newData);

export {
    getPlayerHeroes,
    setPlayerHeroes,
    updatePlayerHeroes,
    incrementPlayerHeroData,
    addPlayerHero,
};
