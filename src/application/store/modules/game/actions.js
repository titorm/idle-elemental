import { SET_GAME_DATA, SET_HEROES, SET_PRICES, SET_RATES, SET_STAGES } from './constants';

export function setGameData(payload) {
    return {
        type: SET_GAME_DATA,
        payload,
    };
}

export function setHeroes(payload) {
    return {
        type: SET_HEROES,
        payload,
    };
}

export function setPrices(payload) {
    return {
        type: SET_PRICES,
        payload,
    };
}

export function setRates(payload) {
    return {
        type: SET_RATES,
        payload,
    };
}

export function setStages(payload) {
    return {
        type: SET_STAGES,
        payload,
    };
}
