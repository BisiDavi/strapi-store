import { TOTAL_AMOUNT, TOTAL_AMOUNT_ERROR } from '../constants';

export const TotalAmountReducer = (state = { totalAmount: 0 }, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOTAL_AMOUNT:
            return {
                ...state,
                totalAmount: payload,
            };
        case TOTAL_AMOUNT_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
