import { incrementPlayerHeroData } from '../../api/methods/playerApi';

const addHeroMedalsToPlayer = async (list) => {
    list.forEach(async (elem) => {
        await incrementPlayerHeroData(elem.hero.id, 'medals', elem.amount);
    });
};

export { addHeroMedalsToPlayer };
