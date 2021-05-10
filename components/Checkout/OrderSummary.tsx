import React from 'react';
import { useCart, useCurrency } from '../../hooks';
import styles from '../../styles/checkout.module.css';
import { getTotalAmount } from '../../utils';

const OrderSummary = () => {
    const { products } = useCart();
    const { priceExchange, symbol } = useCurrency();

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
                        {priceExchange(getTotalAmount(products))}
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
