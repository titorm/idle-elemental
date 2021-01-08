import { SET_APP_LOADED } from './constants';

const INITIAL_STATE = {
    appLoaded: false,
};

export default function filter(state = INITIAL_STATE, action) {
    switch (action.type) {
    case SET_APP_LOADED:
        return { ...state, appLoaded: action.payload };
    default:
        return state;
    }
}
