import { incrementPlayerHeroData, addPlayerHero } from '../../api/methods/playerHeroApi';

const mergeGameAndPlayerHeroes = (gameHeroList, playerHeroes) => {
    const finalHeroList = [];
    gameHeroList.forEach(async (hero) => {
        let playerHero = playerHeroes.find((elem) => elem.id === hero.id);
        if (!playerHero) {
            playerHero = getBaseHero();
            await addPlayerHero(hero.id, playerHero);
        }
        finalHeroList.push({
            id: hero.id,
            gameInfo: hero,
            playerInfo: playerHero,
            combatInfo: {}, // TODO
        });
    });

    return finalHeroList;
};

const getBaseHero = () => ({
    stars: 0,
    ascension: 0,
    medals: 0,
});

const addHeroMedalsToPlayer = async (list) => {
    list.forEach(async (elem) => {
        await incrementPlayerHeroData(elem.hero.id, 'medals', elem.amount);
    });
};

export { getBaseHero, mergeGameAndPlayerHeroes, addHeroMedalsToPlayer };
