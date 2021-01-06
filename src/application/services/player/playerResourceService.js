import { updatePlayerResources } from '../../api/methods/playerApi';

const setResourcesToPlayer = async (data) => {
    updatePlayerResources(data);
};

const setSpecificResourceToPlayer = async (resource, amount) => {
    updatePlayerResources({ [resource]: amount });
};

const playerHasResource = async (playerResources, price) => {
    let hasAllResources = true;
    price.forEach((elem) => {
        if (playerResources[elem.currency] < price.amount) {
            hasAllResources = false;
        }
    });
    return hasAllResources;
};

export { setResourcesToPlayer, setSpecificResourceToPlayer, playerHasResource };
