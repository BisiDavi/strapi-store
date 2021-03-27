import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
} from "../constants";

export const AddToCartAction = (product) => (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART_REQUEST,
        });
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_ERROR,
            payload: error,
        });
    }
};
