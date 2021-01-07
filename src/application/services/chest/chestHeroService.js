import { HERO_CHEST_TYPE } from '../../constants/chestConstants';

import { getHeroList } from '../../api/methods/heroApi';
import { getChestRate } from '../../api/methods/rateApi';

const getPossibleHeroes = (heroList, rarity, chestType) => {
    return heroList.filter((hero) => hero.category.rarity === rarity && hero.acquiredAt.includes(chestType));
};

const randomlySelectHero = (heroList) => {
    return heroList[Math.floor(Math.random() * heroList.length)];
};

const openChest = async (chestType, amount = 1) => {
    const heroList = await getHeroList();
    const chestRates = await getChestRate(chestType);
    const result = [];
    Object.keys(chestRates).forEach((rate) => {
        const possibleHeroList = getPossibleHeroes(heroList, rate, chestType);
        for (let i = 0; i < amount; i++) {
            const hero = randomlySelectHero(possibleHeroList);
            const index = result.findIndex((elem) => elem.hero.id === hero.id);

            if (index !== -1) result.amount += chestRates[rate];
            else result.push({ hero, amount: chestRates[rate] });
        }
    });

    return result;
};

const openNormalHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.NORMAL, amount);
const openBronzeHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.BRONZE, amount);
const openSilverHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.SILVER, amount);
const openGoldHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.GOLD, amount);

export { openNormalHeroChest, openBronzeHeroChest, openSilverHeroChest, openGoldHeroChest };
