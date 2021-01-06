import { SET_PLAYER_RESOURCES } from './constants';

const INITIAL_STATE = {
    resources: {},
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_PLAYER_RESOURCES:
        return { ...state, resources: action.payload };
    default:
        return state;
    }
}
