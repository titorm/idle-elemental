import { SET_USER, SET_USER_CONFIG } from './constants';

export function setUser(payload) {
    return {
        type: SET_USER,
        payload,
    };
}

export function setUserConfig(payload) {
    return {
        type: SET_USER_CONFIG,
        payload,
    };
}
