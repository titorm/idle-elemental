import { CURRENCIES } from '../constants';

import { getPlayer, setPlayer, getPlayerHeroes, setPlayerHeroes } from '../../api/methods/playerApi';
import { getHeroList } from '../../api/methods/heroApi';

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

const getStartingPlayerHeroes = async () => {
    const heroList = await getHeroList();
    const baseHero = getBaseHero();
    return heroList.map((hero) => ({ id: hero.id, ...baseHero }));
};

const getBaseHero = () => ({
    stars: 0,
    ascension: 0,
    medals: 0,
});

const createPlayerInitialData = async () => {
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

    const startingHeroes = await getStartingPlayerHeroes();
    await setPlayerHeroes(startingHeroes);
};

const getCurrentPlayer = () => getPlayer();
const getCurrentPlayerHeroes = () => getPlayerHeroes();

export { getCurrentPlayer, getCurrentPlayerHeroes, createPlayerInitialData };
