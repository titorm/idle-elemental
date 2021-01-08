import { getCollectionData } from '../api';

const getHeroes = async () => getCollectionData('heroes');
const getPrices = async () => getCollectionData('prices');
const getRates = async () => getCollectionData('rates');

export { getHeroes, getPrices, getRates };
