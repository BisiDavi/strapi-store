import { useRedux } from '.';

export default function useUserDetails() {
    const { SelectState } = useRedux();

    const { details } = SelectState('userDetails');
    const { method } = SelectState('shipping');
    const { additionalInformation } = SelectState('information');
    const { totalAmount } = SelectState('totalAmount');
    const { products } = SelectState('cart');
    const { payment, paymentDetails } = SelectState('payment');
    const { country } = SelectState('IP');
    return {
        details,
        method,
        additionalInformation,
        totalAmount,
        products,
        payment,
        paymentDetails,
        country,
    };
}
