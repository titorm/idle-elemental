import { getDocumentData } from '../api';

const getBaseSummonHeroesPrices = () => getDocumentData('prices', 'SUMMON_HEROES');

export { getBaseSummonHeroesPrices };
