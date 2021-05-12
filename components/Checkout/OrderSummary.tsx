import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCart, useCurrency } from '../../hooks';
import styles from '../../styles/checkout.module.css';
import { getTotalAmount } from '../../utils';
import { CurrencyAction } from '../../store/actions/currencyAction';

const OrderSummary = () => {
    const { products } = useCart();
    const {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
    } = useCurrency();
    const dispatch = useDispatch();
    const { rushOrder } = useSelector((state) => state.rushOrder);
    const { name, value } = useSelector((state) => state.currency);
    const { method } = useSelector((state) => state.shipping);

    const dropdownValues = {
        dollar: { name: 'Dollar', value: 1 },
        naira: { name: 'Naira', value: 460 },
    };

    let nairaPrice =
        name === 'Naira'
            ? formatPrice(5000)
            : formatPrice(Math.floor(5000 / 460));

    useEffect(() => {
        if (method !== null && method.includes('₦5,000')) {
            dispatch(CurrencyAction(dropdownValues.naira));
        } else {
            dispatch(CurrencyAction(dropdownValues.dollar));
        }
    }, [method]);

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

    const calculateTotal = () => {
        let total;
        if (rushOrder && method) {
            console.log('me');
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
    };

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
                        {calculateTotal()}
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
};

export default OrderSummary;
