import { updatePlayerResources } from '../../api/methods/playerApi';

const setResourcesToPlayer = async (data) => {
    return updatePlayerResources(data);
};

const setSpecificResourceToPlayer = async (resource, amount) => {
    return updatePlayerResources({ [resource]: amount });
};

const playerHasResource = async (playerResources, price) => {
    let hasAllResources = true;
    price.forEach((elem) => {
        if (playerResources[elem.currency] < elem.amount) {
            hasAllResources = false;
        }
    });
    return hasAllResources;
};

const removePlayerResource = async (playerResources, price) => {
    const newResources = { ...playerResources };
    price.forEach((elem) => {
        newResources[elem.currency] -= elem.amount;
    });
    await updatePlayerResources(newResources);
    return newResources;
};

export { setResourcesToPlayer, setSpecificResourceToPlayer, playerHasResource, removePlayerResource };
