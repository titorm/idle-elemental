import { RARITIES } from '../constants';

import { getHeroList } from '../../api/methods/heroApi';
import { getSummonHeroesRate } from '../../api/methods/rateApi';

const formatProbabilityMaxNumbers = (probability) => ({
    [RARITIES.COMMON]: probability[RARITIES.COMMON],
    [RARITIES.RARE]: probability[RARITIES.COMMON] + probability[RARITIES.RARE],
    [RARITIES.EPIC]: probability[RARITIES.COMMON] + probability[RARITIES.RARE] + probability[RARITIES.EPIC],
    [RARITIES.LEGENDARY]: probability[RARITIES.COMMON] + probability[RARITIES.RARE] + probability[RARITIES.EPIC] + probability[RARITIES.LEGENDARY],
});

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

const summon = async (amount = 1) => {
    const heroList = formatHeroes(await getHeroList());
    const probability = formatProbabilityMaxNumbers(await getSummonHeroesRate());

    const result = [];
    for (let i = 0; i < amount; i++) {
        result.push(summonSingleHero(heroList, probability));
    }

    return result;
};

export { summon };
