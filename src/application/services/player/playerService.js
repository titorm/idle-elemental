import { CURRENCIES } from '../constants';

const startPlayerCurrencies = async () => {
    const baseObj = {
        [CURRENCIES.GOLD]: 0,
        [CURRENCIES.XP]: 0,
        [CURRENCIES.DIAMOND]: 0,
    };
    
};

const createPlayerInitialData = async () => {
    await startPlayerCurrencies();
};

export { createPlayerInitialData };
