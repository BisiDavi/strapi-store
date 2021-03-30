import { COUNT_ERROR, DECREASE_COUNT, INCREASE_COUNT } from "../constants";

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
