import { HERO_CHEST_TYPE } from '../../constants/chestConstants';

import { getChestPrices } from '../../api/methods/priceApi';

const getHeroesChestPrice = async (chestType, amount = 1) => {
    const prices = await getChestPrices();
    const basePrice = prices[chestType];
    if (!basePrice) return null;

    return prices.map((elem) => ({ ...elem, amount: elem.amount * amount }));
};

const getNormalHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.NORMAL, amount);
const getBronzeHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.BRONZE, amount);
const getSilverHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.SILVER, amount);
const getGoldHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.GOLD, amount);

export { getNormalHeroChestPrice, getBronzeHeroChestPrice, getSilverHeroChestPrice, getGoldHeroChestPrice };
