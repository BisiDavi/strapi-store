import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const middleware = [thunk];

const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
