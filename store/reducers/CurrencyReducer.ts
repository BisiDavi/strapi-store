import { SELECT_CURRENCY } from '../constants';

export const CurrencyReducer = (
    state = {
        name: 'Dollar',
        value: 1,
    },
    action,
) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_CURRENCY:
            if (payload.name === 'Naira') {
                return {
                    ...state,
                    name: payload.name,
                    value: payload.value,
                };
            } else if (payload.name === 'Dollar') {
                return {
                    ...state,
                    name: payload.name,
                    value: payload.value,
                };
            }
        default:
            return state;
    }
};
