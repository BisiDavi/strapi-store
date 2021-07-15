import {
    SELECT_CURRENCY,
    SET_CURRENCY,
    SELECT_CURRENCY_ERROR,
} from '../constants';

export const CurrencyReducer = (
    state = {
        name: 'Dollar',
        value: 1,
        naira: {
            value: null,
        },
    },
    action,
) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_CURRENCY:
            return {
                ...state,
                name: payload.name,
                value: payload.value,
            };
        case SET_CURRENCY:
            return {
                ...state,
                naira: {
                    value: payload,
                },
            };
        case SELECT_CURRENCY_ERROR:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
