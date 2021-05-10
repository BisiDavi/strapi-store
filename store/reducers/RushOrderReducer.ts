import { RUSH_ORDER, RUSH_ORDER_ERROR } from '../constants';

export const RushOrderReducer = (state = { rushOrder: false }, action) => {
    const { type, payload } = action;
    switch (type) {
        case RUSH_ORDER:
            console.log('payload', payload);
            return {
                ...state,
                rushOrder: payload,
            };
        case RUSH_ORDER_ERROR:
            return {
                ...state,
                rushOrder: payload,
            };
        default:
            return state;
    }
};
