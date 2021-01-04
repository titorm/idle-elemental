import { CURRENCIES } from '../constants';

import { getDropEssentialRates } from '../../api/methods/rateApi';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const getCurrencyMultiplier = () => {
    return 1;
};

const generatePlayerCurrenciesOvertime = async (amountOfSeconds = 0) => {
    const player = {};
    const baseDropRates = await getDropEssentialRates();

    return {
        [CURRENCIES.GOLD]: generateCurrency(baseDropRates[CURRENCIES.GOLD], getCurrencyMultiplier(), amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(baseDropRates[CURRENCIES.XP], getCurrencyMultiplier(), amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
