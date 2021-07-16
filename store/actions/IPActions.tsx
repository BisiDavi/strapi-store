import { SET_USER_IP, SET_USER_IP_ERROR } from '../constants';

export const IPAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: SET_USER_IP,
            payload,
        });
    } catch (error) {
        dispatch({
            type: SET_USER_IP_ERROR,
            payload: error,
        });
    }
};
