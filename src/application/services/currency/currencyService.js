import { CURRENCIES } from '../../constants/currencyConstants';

import { getDropEssentialRates } from '../../api/methods/rateApi';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const generatePlayerCurrenciesOvertime = async (playerMultipliers, amountOfSeconds = 0) => {
    const baseDropRates = await getDropEssentialRates();

    return {
        [CURRENCIES.GOLD]: generateCurrency(baseDropRates[CURRENCIES.GOLD], playerMultipliers[CURRENCIES.GOLD], amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(baseDropRates[CURRENCIES.XP], playerMultipliers[CURRENCIES.XP], amountOfSeconds),
        [CURRENCIES.DIAMOND]: generateCurrency(baseDropRates[CURRENCIES.DIAMOND], playerMultipliers[CURRENCIES.DIAMOND], amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
