import {
    ADD_CART_FROM_STORAGE,
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    CLEAR_CART,
    CLEAR_CART_ERROR,
} from '../constants';

export const AddToCartAction = (product) => (dispatch) => {
    try {
        dispatch({
            type: ADD_TO_CART_REQUEST,
            payload: product,
        });
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_ERROR,
            error,
        });
    }
};

export const AddCartFromStorage = () => (dispatch) => {
    try {
        dispatch({
            type: ADD_CART_FROM_STORAGE,
        });
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_ERROR,
        });
    }
};

export const ClearCartAction = () => (dispatch) => {
    try {
        dispatch({
            type: CLEAR_CART,
        });
    } catch (error) {
        dispatch({
            type: CLEAR_CART_ERROR,
        });
    }
};
