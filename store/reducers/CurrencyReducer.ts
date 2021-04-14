import { SELECT_CURRENCY } from "../constants";

export const CurrencyReducer = (
    state = {
        currency: {
            name: "Dollar",
            value: 1,
        },
    },
    action
) => {
    const { type, payload } = action;

    switch (type) {
        case SELECT_CURRENCY:
            if (payload.name === "Naira") {
                return {
                    ...state,
                    currency: { name: payload.name, value: payload.value },
                };
            } else if (payload.name === "Dollar") {
                return {
                    ...state,
                    currency: { name: payload.name, value: payload.value },
                };
            }
            break;
        default:
            return state;
    }
};
