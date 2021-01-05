import { CURRENCIES } from '../constants';

import { setPlayer, setPlayerHeroes, getPlayerResources, updatePlayerResources } from '../../api/methods/playerApi';
import { getHeroList } from '../../api/methods/heroApi';

const getStartingPlayerResources = () => {
    const baseResources = {};
    Object.keys(CURRENCIES).forEach((currency) => {
        baseResources[currency] = 0;
    });
    return baseResources;
};

const getStartingPlayerMultipliers = () => {
    const baseMultipliers = {};
    Object.keys(CURRENCIES).forEach((currency) => {
        baseMultipliers[currency] = 1;
    });
    return baseMultipliers;
};

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

const setResourceToPlayer = async (resource, amount) => {
    updatePlayerResources({ [resource]: amount });
};

export { createPlayerInitialData, setResourceToPlayer };
