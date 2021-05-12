import { SHIPPING_ADDRESS, SHIPPING_ADDRESS_ERROR } from '../constants';

export const ShippingMethodReducer = (state = { method: null }, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHIPPING_ADDRESS:
            return { ...state, method: payload };
        case SHIPPING_ADDRESS_ERROR:
            return { ...state, method: payload };
        default:
            return state;
    }
};
