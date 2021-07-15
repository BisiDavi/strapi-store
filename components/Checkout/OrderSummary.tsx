import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCart, useCurrency, useRedux } from '@hooks/.';
import { getTotalAmount } from '@utils/.';
import { CurrencyAction } from '@store/actions/currencyAction';
import { TotalAmountAction } from '@store/actions/TotalAmountAction';
import styles from '@styles/checkout.module.css';

export default function OrderSummary() {
    const { products } = useCart();
    const { dispatch, SelectState } = useRedux();
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

    let nairaPrice =
        name === 'Naira'
            ? formatPrice(5000)
            : formatPrice(Math.floor(5000 / currencyRate.naira.value));

    useEffect(() => {
        if (method !== null && method.includes('₦5,000')) {
            dispatch(CurrencyAction(currencyRate.naira));
        } else {
            dispatch(CurrencyAction(currencyRate.dollar));
        }
    }, []);

    const shippingPrice = () => {
        if (method !== null && method.includes('$20.00')) {
            return priceExchange(20);
        } else if (method !== null && method.includes('₦5,000')) {
            return nairaPrice;
        } else if (method !== null && method.includes('other countries')) {
            return priceExchange(50);
        } else {
            return null;
        }
    };

    const totalAmount = priceExchange(getTotalAmount(products));
    const rushOrderAmount = priceExchange(rushOrder);
    const shippingAmount = shippingPrice();

    function calculateTotal() {
        let total;
        if (rushOrder && method) {
            total =
                formatToNumber(totalAmount) +
                formatToNumber(rushOrderAmount) +
                formatToNumber(shippingAmount);
            return formatPrice(total);
        } else if (rushOrder) {
            total =
                formatToNumber(totalAmount) + formatToNumber(rushOrderAmount);
            return formatPrice(total);
        } else {
            total =
                formatToNumber(totalAmount) + formatToNumber(shippingAmount);
            return formatPrice(total);
        }
    }

    const itemTotalAmount = calculateTotal();

    //useEffect(() => {
    //    dispatch(TotalAmountAction(formatToNumber(calculateTotal())));
    //}, []);

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
