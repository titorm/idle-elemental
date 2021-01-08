import { CURRENCIES } from '../../constants/currencyConstants';

import { getPlayer, setPlayer } from '../../api/methods/playerApi';
import { setPlayerHeroes } from '../../api/methods/playerHeroApi';

import { getBaseHero } from './playerHeroService';

// Starting
const getStartingPlayerConfig = () => ({
    roles: ['PLAYER'],
});

const getStartingPlayerTimes = () => {
    const now = new Date().getTime();
    return {
        createdAt: now,
        lastLogin: now,
        lastCollect: now,
    };
};

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

const getStartingPlayerHeroes = (gameHeroList) => {
    const baseHero = getBaseHero();
    return gameHeroList.map((hero) => ({ id: hero.id, ...baseHero }));
};

// Export
const createPlayerInitialData = async (gameHeroList) => {
    const config = getStartingPlayerConfig();
    const times = getStartingPlayerTimes();
    const resources = getStartingPlayerResources();
    const multipliers = getStartingPlayerMultipliers();

    await setPlayer({
        config,
        times,
        resources,
        multipliers,
    });

    const startingHeroes = getStartingPlayerHeroes(gameHeroList);
    await setPlayerHeroes(startingHeroes);
};

const getCurrentPlayer = () => getPlayer();

export { getCurrentPlayer, createPlayerInitialData };
