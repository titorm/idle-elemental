import { CURRENCIES } from '../constants';

import { getDropEssentialRates } from '../../api/methods/rateApi';
import { getPlayerMultipliers } from '../../api/methods/playerApi';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const generatePlayerCurrenciesOvertime = async (amountOfSeconds = 0) => {
    const playerMultipliers = await getPlayerMultipliers();
    const baseDropRates = await getDropEssentialRates();

    return {
        [CURRENCIES.GOLD]: generateCurrency(baseDropRates[CURRENCIES.GOLD], playerMultipliers[CURRENCIES.GOLD], amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(baseDropRates[CURRENCIES.XP], playerMultipliers[CURRENCIES.XP], amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
