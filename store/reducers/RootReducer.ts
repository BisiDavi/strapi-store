import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { CurrencyReducer } from "./CurrencyReducer";

const RootReducer = combineReducers({
    cart: CartReducer,
    currency: CurrencyReducer,
});

export default RootReducer;
