import { CURRENCIES } from '../constants';

import { setPlayer, setPlayerHeroes } from '../../api/methods/playerApi';
import { getHeroList } from '../../api/methods/heroApi';

const getStartingPlayerResources = () => ({
    [CURRENCIES.GOLD]: 0,
    [CURRENCIES.XP]: 0,
    [CURRENCIES.DIAMOND]: 0,
});

const getStartingPlayerMultipliers = () => ({
    [CURRENCIES.GOLD]: 1,
    [CURRENCIES.XP]: 1,
    [CURRENCIES.DIAMOND]: 1,
});

const getStartingPlayerHeroes = async () => {
    const heroList = await getHeroList();
    const baseHero = getBaseHero();
    return heroList.map((hero) => ({ id: hero.id, ...baseHero }));
};

const getBaseHero = () => ({
    stars: 0,
});

const createPlayerInitialData = async () => {
    const resources = getStartingPlayerResources();
    const multipliers = getStartingPlayerMultipliers();
    await setPlayer({
        resources,
        multipliers,
    });

    const startingHeroes = await getStartingPlayerHeroes();
    await setPlayerHeroes(startingHeroes);
};

export { createPlayerInitialData };
