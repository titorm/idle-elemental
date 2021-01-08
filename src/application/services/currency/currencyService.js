import { CURRENCIES } from '../../constants/currencyConstants';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const generatePlayerCurrenciesOvertime = async (rates, multipliers, amountOfSeconds = 0) => {
    const essentialDropRates = rates.find((elem) => elem.id === 'DROP_ESSENTIAL');

    return {
        [CURRENCIES.GOLD]: generateCurrency(essentialDropRates[CURRENCIES.GOLD], multipliers[CURRENCIES.GOLD], amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(essentialDropRates[CURRENCIES.XP], multipliers[CURRENCIES.XP], amountOfSeconds),
        [CURRENCIES.DIAMOND]: generateCurrency(essentialDropRates[CURRENCIES.DIAMOND], multipliers[CURRENCIES.DIAMOND], amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
