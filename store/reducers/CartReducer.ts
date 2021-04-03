import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    COUNT_ERROR,
    DECREASE_COUNT,
    DELETE_PRODUCT,
    INCREASE_COUNT,
} from "../constants";
import { CartCounter, deleteProduct, ProductAmount } from "../utils/cart";

export const CartReducer = (
    state = {
        showCart: false,
        loading: false,
        products: [],
    },
    action
) => {
    const { type, payload } = action;

    const updateProduct = (count, amount) => {
        state.products[payload.index] = {
            ...state.products[payload.index],
            count: count,
            amount: amount,
        };
    };

    switch (type) {
        case ADD_TO_CART_REQUEST:
            return { ...state, loading: true };
        case ADD_TO_CART_SUCCESS:
            let payloadObj = { ...payload, count: 1, amount: payload.price };
            return {
                ...state,
                showCart: true,
                products: [...state.products, payloadObj],
            };
        case INCREASE_COUNT:
            const increaseQuantity = CartCounter(
                state.products[payload.index].count,
                "increase"
            );
            const increaseAmount = ProductAmount(payload, increaseQuantity);

            state.products[payload.index] = {
                ...state.products[payload.index],
                count: increaseQuantity,
                amount: increaseAmount,
            };

            updateProduct(increaseQuantity, increaseAmount);

            return {
                ...state,
                products: [...state.products],
            };
        case DECREASE_COUNT:
            const decreaseQuantity = CartCounter(
                state.products[payload.index].count,
                "decrease"
            );
            const decreaseAmount = ProductAmount(payload, decreaseQuantity);

            updateProduct(decreaseQuantity, decreaseAmount);

            state.products[payload.index].count === 0 &&
                deleteProduct(state, payload);
            return {
                ...state,
                products: [...state.products],
            };
        case DELETE_PRODUCT:
            deleteProduct(state, payload);
            return {
                ...state,
                products: [...state.products],
            };
        case ADD_TO_CART_ERROR:
            return { ...state, error: payload };
        case COUNT_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
};
