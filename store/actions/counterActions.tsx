import {
    COUNT_ERROR,
    DECREASE_COUNT,
    DELETE_PRODUCT,
    DELETE_PRODUCT_ERROR,
    INCREASE_COUNT,
} from "../constants";

export const IncrementCounterAction = (product) => (dispatch) => {
    console.log("payload", product);
    try {
        dispatch({
            type: INCREASE_COUNT,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: COUNT_ERROR,
            payload: error,
        });
    }
};

export const DecrementCounterAction = (product) => (dispatch) => {
    try {
        dispatch({
            type: DECREASE_COUNT,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: COUNT_ERROR,
            payload: error,
        });
    }
};

export const DeleteProductAction = (product) => (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_ERROR,
            payload: error,
        });
    }
};
