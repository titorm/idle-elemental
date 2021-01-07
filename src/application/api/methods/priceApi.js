import { getDocumentData } from '../api';

const getChestPrices = () => getDocumentData('prices', 'CHEST');

export { getChestPrices };
