const generateCurrency = (baseAmount = 0, multiplier = 1, seconds = 0) => {
    return baseAmount * multiplier * seconds;
};

const generateGold = () => {

};

const generatePlayerCurrenciesOvertime = (player, amountOfSeconds = 0) => {

};

export default {
    generatePlayerCurrenciesOvertime,
};