import { RUSH_ORDER, RUSH_ORDER_ERROR } from '../constants';

export const RushOrderAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: RUSH_ORDER,
            payload,
        });
    } catch (error) {
        dispatch({
            type: RUSH_ORDER_ERROR,
            payload: error,
        });
    }
};
