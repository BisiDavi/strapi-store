import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
} from "../constants";

export const CartReducer = (
    state = { showCart: false, loading: false },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART_REQUEST:
            return { ...state, loading: true };
        case ADD_TO_CART_SUCCESS:
            return { ...state, showCart: true, product: payload };
        case ADD_TO_CART_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};
