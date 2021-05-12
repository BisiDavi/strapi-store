import {
    ADDITIONAL_INFORMATION,
    ADDITIONAL_INFORMATION_ERROR,
} from '../constants';

export const AdditionalInformationAction = (payload) => (dispatch) => {
    try {
        dispatch({
            type: ADDITIONAL_INFORMATION,
            payload,
        });
    } catch (error) {
        dispatch({
            type: ADDITIONAL_INFORMATION_ERROR,
            error,
        });
    }
};
