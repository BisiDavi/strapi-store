import { SET_CURRENCY, SET_CURRENCY_ERROR } from '../constants';

export const CurrencyReducer = (
    state = {
        name: 'Dollar',
        value: 1,
    },
    action,
) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENCY:
            return {
                ...state,
                name: payload.name,
                value: payload.value,
            };
        case SET_CURRENCY_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
