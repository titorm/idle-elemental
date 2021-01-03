import { getDocument } from '../api';

const getSummonProbability = () => getDocument('probabilities', 'SUMMON_HEROES');

export { getSummonProbability };
