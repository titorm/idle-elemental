import { getBaseSummonHeroesPrices } from '../../api/methods/priceApi';

const getNormalSummonHeroesPrice = async (amount = 1) => {
    const prices = await getBaseSummonHeroesPrices();
    if (amount === 1) return prices.NORMAL_1;
    if (amount === 10) return prices.NORMAL_10;
    return null;
};

export { getNormalSummonHeroesPrice };
