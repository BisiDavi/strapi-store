import {
    ADDITIONAL_INFORMATION,
    ADDITIONAL_INFORMATION_ERROR,
} from '../constants';

export const AdditionalInformationReducer = (
    state = {
        additionalInformation: null,
    },
    action,
) => {
    const { type, payload } = action;

    switch (type) {
        case ADDITIONAL_INFORMATION:
            return { ...state, additionalInformation: payload };
        case ADDITIONAL_INFORMATION_ERROR:
            return { ...state, additionalInformation: payload };
        default:
            return state;
    }
};
