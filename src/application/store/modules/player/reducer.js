import { SET_PLAYER_DATA, SET_PLAYER_RESOURCES, SET_PLAYER_MULTIPLIERS, SET_PLAYER_TIMES, SET_PLAYER_HEROES } from './constants';

const INITIAL_STATE = {
    resources: {},
    multipliers: {},
    times: {},
    heroes: [],
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_PLAYER_DATA:
        return { ...state, ...action.payload };
    case SET_PLAYER_RESOURCES:
        return { ...state, resources: action.payload };
    case SET_PLAYER_MULTIPLIERS:
        return { ...state, multipliers: action.payload };
    case SET_PLAYER_TIMES:
        return { ...state, times: action.payload };
    case SET_PLAYER_HEROES:
        return { ...state, heroes: action.payload };
    default:
        return state;
    }
}
