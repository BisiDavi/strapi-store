import { combineReducers } from 'redux';
import { AdditionalInformationReducer } from './AdditionalInformationReducer';
import { CartReducer } from './CartReducer';
import { CurrencyReducer } from './CurrencyReducer';
import { RushOrderReducer } from './RushOrderReducer';
import { ShippingMethodReducer } from './ShippingMethodReducer';
import { UserDetailsReducer } from './UserDetailsReducer';

const RootReducer = combineReducers({
    cart: CartReducer,
    currency: CurrencyReducer,
    rushOrder: RushOrderReducer,
    shipping: ShippingMethodReducer,
    information: AdditionalInformationReducer,
    userDetails: UserDetailsReducer,
});

export default RootReducer;
