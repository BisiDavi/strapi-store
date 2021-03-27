import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";

const RootReducer = combineReducers({
    cart: CartReducer,
});

export default RootReducer;
