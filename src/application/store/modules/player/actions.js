import { SET_PLAYER_RESOURCES, SET_PLAYER_MULTIPLIERS, SET_PLAYER_HEROES } from './constants';

export function setPlayerResources(payload) {
    return {
        type: SET_PLAYER_RESOURCES,
        payload,
    };
}

export function setPlayerMultipliers(payload) {
    return {
        type: SET_PLAYER_MULTIPLIERS,
        payload,
    };
}

export function setPlayerHeroes(payload) {
    return {
        type: SET_PLAYER_HEROES,
        payload,
    };
}
