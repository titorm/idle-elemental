import { getCollectionData } from '../api';

const getHeroList = async () => getCollectionData('heroes');

export { getHeroList };
