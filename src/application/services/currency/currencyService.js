import { CURRENCIES } from '../constants';

const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const getCurrencyBaseAmount = () => {
    return 10;
};

const getCurrencyMultiplier = () => {
    return 1;
};

const generatePlayerCurrenciesOvertime = (player, amountOfSeconds = 0) => {
    return {
        [CURRENCIES.GOLD]: generateCurrency(getCurrencyBaseAmount(), getCurrencyMultiplier(), amountOfSeconds),
        [CURRENCIES.XP]: generateCurrency(getCurrencyBaseAmount(), getCurrencyMultiplier(), amountOfSeconds),
    };
};

export { generatePlayerCurrenciesOvertime };
