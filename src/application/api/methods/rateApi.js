import { getDocumentData } from '../api';

const getDropEssentialRates = () => getDocumentData('rates', 'DROP_ESSENTIAL');
const getChestRate = (chestType) => getDocumentData('rates', chestType);

export { getDropEssentialRates, getChestRate };
