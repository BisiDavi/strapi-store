import { SET_CURRENCY, SET_CURRENCY_ERROR } from '../constants';

export const setCurrencyAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: SET_CURRENCY,
            payload,
        });
    } catch (error) {
        dispatch({
            type: SET_CURRENCY_ERROR,
            payload: error,
        });
        console.log('error', error);
    }
};
