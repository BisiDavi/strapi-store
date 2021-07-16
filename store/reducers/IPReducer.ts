import { SET_USER_IP, SET_USER_IP_ERROR } from '../constants';

export function IPReducer(state = { country: null }, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_USER_IP:
            return { ...state, country: payload };
        case SET_USER_IP_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
}
