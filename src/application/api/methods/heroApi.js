import { getCollection } from '../api';

const getHeroList = async () => getCollection('heroes');

export { getHeroList };
