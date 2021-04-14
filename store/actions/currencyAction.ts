import { SELECT_CURRENCY, SELECT_CURRENCY_ERROR } from "../constants";

export const SelectCurrency = (currency) => (dispatch) => {
    try {
        dispatch({
            type: SELECT_CURRENCY,
            payload: currency,
        });
    } catch (error) {
        dispatch({
            type: SELECT_CURRENCY_ERROR,
        });
    }
};
