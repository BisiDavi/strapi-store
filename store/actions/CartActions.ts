import {
    ADD_CART_FROM_STORAGE,
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    CLEAR_CART,
    CLEAR_CART_ERROR,
    CLEAR_CART_FROM_STORAGE,
    CLEAR_CART_FROM_STORAGE_ERROR,
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
            payload: error,
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
            payload: error,
        });
    }
};

export const ClearCartAction = () => (dispatch) => {
    try {
        dispatch({
            type: CLEAR_CART,
        });
        dispatch({
            type: CLEAR_CART_FROM_STORAGE,
        });
    } catch (error) {
        dispatch({
            type: CLEAR_CART_ERROR,
            payload: error,
        });
        dispatch({
            type: CLEAR_CART_FROM_STORAGE_ERROR,
            payload: error,
        });
    }
};
