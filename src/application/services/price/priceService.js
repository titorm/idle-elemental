import { HERO_CHEST_TYPE } from '../../constants/chestConstants';

const getHeroesChestPrice = async (prices, chestType, amount = 1) => {
    const chestPrices = prices.find((elem) => elem.id === 'CHEST');
    if (!chestPrices) return null;

    const basePrice = chestPrices[chestType];
    if (!basePrice) return null;

    return basePrice.map((elem) => ({ ...elem, amount: elem.amount * amount }));
};

const getNormalHeroChestPrice = (prices, amount = 1) => getHeroesChestPrice(prices, HERO_CHEST_TYPE.NORMAL, amount);
const getBronzeHeroChestPrice = (prices, amount = 1) => getHeroesChestPrice(prices, HERO_CHEST_TYPE.BRONZE, amount);
const getSilverHeroChestPrice = (prices, amount = 1) => getHeroesChestPrice(prices, HERO_CHEST_TYPE.SILVER, amount);
const getGoldHeroChestPrice = (prices, amount = 1) => getHeroesChestPrice(prices, HERO_CHEST_TYPE.GOLD, amount);

export { getNormalHeroChestPrice, getBronzeHeroChestPrice, getSilverHeroChestPrice, getGoldHeroChestPrice };
