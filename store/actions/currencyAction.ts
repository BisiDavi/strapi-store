import { SELECT_CURRENCY, SELECT_CURRENCY_ERROR } from '../constants';

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
