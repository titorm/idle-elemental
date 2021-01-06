import { SET_PLAYER_RESOURCES } from './constants';

export function setPlayerResources(payload) {
    return {
        type: SET_PLAYER_RESOURCES,
        payload,
    };
}
