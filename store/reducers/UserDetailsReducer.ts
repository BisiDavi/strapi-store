import { USER_DETAILS_ADDED, USER_DETAILS_ERROR } from '../constants';

export const UserDetailsReducer = (
    state = { details: null},
    action,
) => {
    const { type, payload } = action;
    switch (type) {
        case USER_DETAILS_ADDED:
            return { ...state, details: payload };
        case USER_DETAILS_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};
