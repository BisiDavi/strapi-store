import { SHIPPING_ADDRESS, SHIPPING_ADDRESS_ERROR } from '../constants';

export const ShippingMethodAction = (shippingMethod) => (dispatch) => {
    try {
        dispatch({
            type: SHIPPING_ADDRESS,
            payload: shippingMethod,
        });
    } catch (error) {
        dispatch({
            type: SHIPPING_ADDRESS_ERROR,
            payload: error,
        });
    }
};

