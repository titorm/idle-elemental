import { SET_GAME_DATA, SET_HEROES, SET_PRICES, SET_RATES, SET_STAGES } from './constants';

const INITIAL_STATE = {
    heroes: [],
    prices: [],
    rates: [],
    stages: [],
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_GAME_DATA:
        return { ...state, ...action.payload };
    case SET_HEROES:
        return { ...state, heroes: action.payload };
    case SET_PRICES:
        return { ...state, prices: action.payload };
    case SET_RATES:
        return { ...state, rates: action.payload };
    case SET_STAGES:
        return { ...state, stages: action.payload };
    default:
        return state;
    }
}
