import { getHeroes, getPrices, getRates } from '../../api/methods/gameApi';

const getGameData = async () => {
    const gameData = {};
    gameData.heroes = await getHeroes();
    gameData.prices = await getPrices();
    gameData.rates = await getRates();
    gameData.stages = []; // TODO
    return gameData;
};

export { getGameData };
