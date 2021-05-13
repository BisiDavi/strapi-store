import { PAYMENT_ERROR, PAYMENT_SUCCESSFUL } from '../constants';

export const PaymentReducer = (
    state = { payment: null, paymentDetails: null },
    action,
) => {
    const { type, payload } = action;

    switch (type) {
        case PAYMENT_SUCCESSFUL:
            return { ...state, payment: true, paymentDetails: payload };

        case PAYMENT_ERROR:
            return { ...state, payment: false, error: payload };

        default:
            return state;
    }
};
