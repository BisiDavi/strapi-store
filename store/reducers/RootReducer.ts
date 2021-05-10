import { combineReducers } from 'redux';
import { CartReducer } from './CartReducer';
import { CurrencyReducer } from './CurrencyReducer';
import { RushOrderReducer } from './RushOrderReducer';

const RootReducer = combineReducers({
    cart: CartReducer,
    currency: CurrencyReducer,
    rushOrder: RushOrderReducer,
});

export default RootReducer;
