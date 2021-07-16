import { combineReducers } from 'redux';
import { AdditionalInformationReducer } from './AdditionalInformationReducer';
import { CartReducer } from './CartReducer';
import { CurrencyReducer } from './CurrencyReducer';
import { PaymentReducer } from './PaymentReducer';
import { RushOrderReducer } from './RushOrderReducer';
import { ShippingMethodReducer } from './ShippingMethodReducer';
import { TotalAmountReducer } from './TotalAmountReducer';
import { UserDetailsReducer } from './UserDetailsReducer';
import { IPReducer } from './IPReducer';

const RootReducer = combineReducers({
    cart: CartReducer,
    currency: CurrencyReducer,
    rushOrder: RushOrderReducer,
    shipping: ShippingMethodReducer,
    information: AdditionalInformationReducer,
    userDetails: UserDetailsReducer,
    totalAmount: TotalAmountReducer,
    IP: IPReducer,
    payment: PaymentReducer,
});

export default RootReducer;
