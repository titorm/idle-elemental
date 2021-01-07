import { RARITIES } from '../../constants/mechanicConstants';
import { HERO_CHEST_TYPE } from '../../constants/chestConstants';

import { getHeroList } from '../../api/methods/heroApi';
import { getChestRate } from '../../api/methods/rateApi';

// const formatProbabilityMaxNumbers = (probability) => ({
//     [RARITIES.COMMON]: probability[RARITIES.COMMON],
//     [RARITIES.RARE]: probability[RARITIES.COMMON] + probability[RARITIES.RARE],
//     [RARITIES.EPIC]: probability[RARITIES.COMMON] + probability[RARITIES.RARE] + probability[RARITIES.EPIC],
//     [RARITIES.LEGENDARY]: probability[RARITIES.COMMON] + probability[RARITIES.RARE] + probability[RARITIES.EPIC] + probability[RARITIES.LEGENDARY],
// });

const getPossibleHeroes = (heroList, rarity, chestType) => {
    return heroList.filter((hero) => hero.category.rarity === rarity && hero.acquiredAt.includes(chestType));
};

const formatHeroes = (heroList) => ({
    [RARITIES.COMMON]: heroList.filter((hero) => hero.category.rarity === RARITIES.COMMON),
    [RARITIES.RARE]: heroList.filter((hero) => hero.category.rarity === RARITIES.RARE),
    [RARITIES.EPIC]: heroList.filter((hero) => hero.category.rarity === RARITIES.EPIC),
    [RARITIES.LEGENDARY]: heroList.filter((hero) => hero.category.rarity === RARITIES.LEGENDARY),
});

const summonSingleHero = (heroes, probability) => {
    const number = Math.floor(Math.random() * 100);
    let chosenRarity = '';

    if (number < probability[RARITIES.COMMON]) chosenRarity = RARITIES.COMMON;
    else if (number < probability[RARITIES.RARE]) chosenRarity = RARITIES.RARE;
    else if (number < probability[RARITIES.EPIC]) chosenRarity = RARITIES.EPIC;
    else if (number < probability[RARITIES.LEGENDARY]) chosenRarity = RARITIES.LEGENDARY;

    const correctRarityHeroes = heroes[chosenRarity];
    return correctRarityHeroes[Math.floor(Math.random() * correctRarityHeroes.length)];
};

const openChest = async (chestType, amount = 1) => {
    const heroList = await getHeroList();
    const chestRates = await getChestRate(chestType);
    console.log(heroList);
    console.log(chestRates);
    // const commonPossibleHeroes = getPossibleHeroes(heroList, RARITIES.COMMON);
    // const probability = formatProbabilityMaxNumbers(await getNormalChestRates());

    const result = [];
    // for (let i = 0; i < amount; i++) {
    //     result.push(summonSingleHero(heroList, probability));
    // }

    return result;
};

const openNormalHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.NORMAL, amount);
const openBronzeHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.BRONZE, amount);
const openSilverHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.SILVER, amount);
const openGoldHeroChest = (amount = 1) => openChest(HERO_CHEST_TYPE.GOLD, amount);

export { openNormalHeroChest, openBronzeHeroChest, openSilverHeroChest, openGoldHeroChest };
