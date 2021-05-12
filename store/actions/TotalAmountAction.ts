import { TOTAL_AMOUNT, TOTAL_AMOUNT_ERROR } from '../constants';

export const TotalAmountAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: TOTAL_AMOUNT,
            payload,
        });
    } catch (error) {
        dispatch({
            type: TOTAL_AMOUNT_ERROR,
            payload: error,
        });
    }
};
