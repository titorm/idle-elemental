import { SET_USER, SET_USER_CONFIG } from './constants';

const INITIAL_STATE = {
    user: {},
    config: [],
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_USER:
        return { ...state, user: action.payload };
    case SET_USER_CONFIG:
        return { ...state, config: action.payload };
    default:
        return state;
    }
}
