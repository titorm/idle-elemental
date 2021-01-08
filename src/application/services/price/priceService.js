import { useSelector } from 'react-redux';

import { HERO_CHEST_TYPE } from '../../constants/chestConstants';

const getHeroesChestPrice = async (chestType, amount = 1) => {
    const { prices } = useSelector((state) => state.game || {});
    const basePrice = prices.chest[chestType];
    if (!basePrice) return null;

    return basePrice.map((elem) => ({ ...elem, amount: elem.amount * amount }));
};

const getNormalHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.NORMAL, amount);
const getBronzeHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.BRONZE, amount);
const getSilverHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.SILVER, amount);
const getGoldHeroChestPrice = (amount = 1) => getHeroesChestPrice(HERO_CHEST_TYPE.GOLD, amount);

export { getNormalHeroChestPrice, getBronzeHeroChestPrice, getSilverHeroChestPrice, getGoldHeroChestPrice };
