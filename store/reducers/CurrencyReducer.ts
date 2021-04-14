import { SELECT_CURRENCY } from "../constants";

export const CurrencyReducer = (
    state = {
        currency: {
            name: "",
            value: null,
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
            }
    }
};
