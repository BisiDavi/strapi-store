/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useCart, useCurrency, useRedux } from '@hooks/.';
import { getTotalAmount } from '@utils/.';
import styles from '@styles/checkout.module.css';
import { TotalAmountAction } from '@store/actions/TotalAmountAction';

export default function OrderSummary() {
    const { products } = useCart();

    const { SelectState, dispatch } = useRedux();
    const {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
        currencyRate,
    } = useCurrency();
    const { rushOrder } = SelectState('rushOrder');
    const { name } = SelectState('currency');
    const { method } = SelectState('shipping');
    const { totalAmount: itemTotalAmount } = SelectState('totalAmount');

    function nairaPrice(price) {
        return name === 'Naira'
            ? formatPrice(price)
            : formatPrice(Math.floor(price / currencyRate.value));
    }
    const shippingPrice = () => {
        if (method !== null && method.includes('$15.00')) {
            return priceExchange(15);
        } else if (method !== null && method.includes('₦3,000')) {
            return nairaPrice(3000);
        } else if (method !== null && method.includes('₦18,000')) {
            return nairaPrice(18000);
        } else if (method !== null && method.includes('other countries')) {
            return priceExchange(50);
        } else {
            return null;
        }
    };

    const totalAmount = priceExchange(getTotalAmount(products));
    const rushOrderAmount = priceExchange(rushOrder);
    const shippingAmount = shippingPrice();

    useEffect(() => {
        function calculateTotal() {
            let total;
            if (rushOrder && method) {
                total =
                    formatToNumber(totalAmount) +
                    formatToNumber(rushOrderAmount) +
                    formatToNumber(shippingAmount);
                dispatch(TotalAmountAction(formatPrice(total)));
                return formatPrice(total);
            } else if (rushOrder) {
                total =
                    formatToNumber(totalAmount) +
                    formatToNumber(rushOrderAmount);
                dispatch(TotalAmountAction(formatPrice(total)));
                return formatPrice(total);
            } else {
                total =
                    formatToNumber(totalAmount) +
                    formatToNumber(shippingAmount);
                dispatch(TotalAmountAction(formatPrice(total)));
                return formatPrice(total);
            }
        }
        calculateTotal();
    }, [rushOrder, method]);

    //const itemTotalAmount = calculateTotal();

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>5</span>ORDER SUMMARY
            </div>
            <div className='order-summary'>
                <div className='row'>
                    <h3>Amount</h3>
                    <h3>
                        {symbol}
                        {totalAmount}
                    </h3>
                </div>
                {rushOrder && (
                    <div className='row'>
                        <h3>Rush Order</h3>
                        <h3>
                            {symbol}
                            {rushOrderAmount}
                        </h3>
                    </div>
                )}
                {method && (
                    <div className='row'>
                        <h3>Shipping</h3>
                        <h3>
                            {symbol}
                            {shippingAmount}
                        </h3>
                    </div>
                )}
                <div className='row'>
                    <h3>Total</h3>
                    <h3>
                        {symbol}
                        {itemTotalAmount}
                    </h3>
                </div>
            </div>
            <style jsx>
                {`
                    .row {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0px 20px;
                    }
                    .row h3 {
                        font-size: 16px;
                    }
                `}
            </style>
        </div>
    );
}
