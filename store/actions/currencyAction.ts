import {
    SELECT_CURRENCY,
    SET_CURRENCY,
    SET_CURRENCY_ERROR,
    SELECT_CURRENCY_ERROR,
} from '../constants';

export const CurrencyAction = (currency) => (dispatch) => {
    try {
        dispatch({
            type: SELECT_CURRENCY,
            payload: currency,
        });
    } catch (error) {
        dispatch({
            type: SELECT_CURRENCY_ERROR,
            payload: error,
        });
        console.log('error', error);
    }
};

export const setNairaRateAction = (currency) => (dispatch) => {
    try {
        dispatch({
            type: SET_CURRENCY,
            payload: currency,
        });
    } catch (error) {
        dispatch({
            type: SET_CURRENCY_ERROR,
            payload: error,
        });
        console.log('error', error);
    }
};
