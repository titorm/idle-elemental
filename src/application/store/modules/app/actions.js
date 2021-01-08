import { SET_APP_LOADED } from './constants';

export function setAppLoaded(payload) {
    return {
        type: SET_APP_LOADED,
        payload,
    };
}
