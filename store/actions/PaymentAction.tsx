import { PAYMENT_ERROR, PAYMENT_SUCCESSFUL } from '../constants';

export const PaymentAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: PAYMENT_SUCCESSFUL,
            payload,
        });
    } catch (error) {
        dispatch({
            type: PAYMENT_ERROR,
            payload: error,
        });
    }
};
