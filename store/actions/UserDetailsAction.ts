import { USER_DETAILS_ADDED, USER_DETAILS_ERROR } from '../constants';

export const UserDetailsAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: USER_DETAILS_ADDED,
            payload,
        });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_ERROR,
            payload: error,
        });
    }
};
