import { getDocumentData } from '../api';

const getSummonHeroesRate = () => getDocumentData('rates', 'SUMMON_HEROES');
const getDropEssentialRates = () => getDocumentData('rates', 'DROP_ESSENTIAL');

export { getSummonHeroesRate, getDropEssentialRates };
