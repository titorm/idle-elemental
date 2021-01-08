import { CURRENCIES } from '../../constants/currencyConstants';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const generatePlayerCurrenciesOvertime = async (rates, multipliers, amountOfSeconds = 0) => {
    return {
        [CURRENCIES.GOLD]: generateCurrency(rates[CURRENCIES.GOLD], multipliers[CURRENCIES.GOLD], amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(rates[CURRENCIES.XP], multipliers[CURRENCIES.XP], amountOfSeconds),
        [CURRENCIES.DIAMOND]: generateCurrency(rates[CURRENCIES.DIAMOND], multipliers[CURRENCIES.DIAMOND], amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
