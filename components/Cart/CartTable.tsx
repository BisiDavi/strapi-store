/* eslint-disable jsx-a11y/alt-text */
import  { useState } from 'react';
import { Image } from 'react-datocms';
import { FcFullTrash } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { useCurrency } from '@hooks/.';
import { DeleteProductAction } from '@store/actions/counterActions';
import { Button } from '../.';
import { getTotalAmount, SendData } from '@utils/.';
import { SelectRushOrder } from '@components/Form/.';
import Loading from '@components/loader/Loading';
import styles from '@styles/cart.module.css';

export default function CartTable(props) {
    const { products } = props;
    const [productQty, setProductQty] = useState(0);
    const [loading, setLoading] = useState(false);
    const [notificationData, setNotificationData] = useState({
        userName: null,
        userEmail: null,
        cart: null,
        amount: null,
    });
    const dispatch = useDispatch();
    const [session] = useSession();
    const router = useRouter();
    const { rushOrder } = useSelector((state) => state.rushOrder);
    const {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
    } = useCurrency();

    const tableTitle = ['Product', 'Name', 'Price', 'Quantity', 'Total'];

    function deleteProduct(index) {
        return dispatch(DeleteProductAction({ products, index }));
    }

    console.log('productQty', productQty);

    const inputHandler = (index) => (e) => {
        e.preventDefault();
        setProductQty(Number(e.target.value));
        products[index].count = e.target.value;
        let newAmount = products[index].count * products[index].price;
        products[index].amount = newAmount;
    };

    const rushOrderDropdown = {
        title: '--Choose Rush Order--',
        options: ['--Choose Rush Order--', 'Rush My Orders (+$55.00)'],
    };

    const productsAmount = priceExchange(getTotalAmount(products));
    const rushOrderPrice = priceExchange(Number(rushOrder));

    function calculateSubtotal() {
        const amount = formatToNumber(productsAmount);
        const rushPrice =
            rushOrder !== false ? formatToNumber(rushOrderPrice) : 0;
        const subtotal = amount + rushPrice;
        return formatPrice(subtotal);
    }

    const subtotalAmount = calculateSubtotal();

    function cartNotification() {
        const userName = session.user.name;
        const userEmail = session.user.email;
        const amount = `${symbol} ${subtotalAmount}`;
        setNotificationData({
            ...notificationData,
            userName,
            userEmail,
            cart: props.products,
            amount,
        });
        console.log('notificationData', notificationData);
        setLoading(true);
        SendData('/cart-notification', notificationData, router, '/checkout');
        setLoading(false);
    }

    return (
        <div className={styles.cartTable}>
            {loading && <Loading />}
            <div className={styles.title}>
                {tableTitle.map((title, index) => (
                    <h3 key={index}>{title}</h3>
                ))}
            </div>
            <div className={styles.cartProduct}>
                {props.products &&
                    products.length > 0 &&
                    products.map((product, index) => (
                        <div className={styles.cartItem} key={index}>
                            <div className={styles.cartImage}>
                                <Image
                                    className={styles.productImage}
                                    data={product.image.responsiveImage}
                                />
                            </div>
                            <div className={styles.name}>
                                <h3>&#34;{product.title}&#34;</h3>
                                <FcFullTrash
                                    onClick={() => deleteProduct(index)}
                                />
                            </div>
                            <div className={styles.price}>
                                <p className='mobile'>Price: </p>
                                {symbol}
                                {priceExchange(product.price)}
                            </div>
                            <div className={styles.input}>
                                <input
                                    onChange={inputHandler(index)}
                                    name={product.title}
                                    defaultValue={product.count}
                                    type='number'
                                />
                            </div>
                            <div className={styles.amount}>
                                <p className='mobile'>Amount: </p>
                                {symbol}
                                {priceExchange(product.amount)}
                            </div>
                        </div>
                    ))}
                <div className={styles.calculator}>
                    <div className='rushMyOrder'>
                        <SelectRushOrder content={rushOrderDropdown} />
                    </div>
                    <div className={styles.subtotal}>
                        <div className='priceList'>
                            <div className='amount'>
                                <h2>Amount</h2>
                                <h2 className={styles.price}>
                                    {symbol}
                                    {productsAmount}
                                </h2>
                            </div>
                            {rushOrder !== false && (
                                <div className='rushOrder'>
                                    <h2>Rush Order</h2>
                                    <h2>
                                        {symbol}
                                        {rushOrderPrice}
                                    </h2>
                                </div>
                            )}
                            <div className='subtotal'>
                                <h3>Subtotal</h3>
                                <h3>
                                    {symbol}
                                    {subtotalAmount}
                                </h3>
                            </div>
                            <p>
                                Tax included. Shipping calculated at checkout.
                            </p>
                        </div>

                        <Button
                            color='white'
                            btnClassName={styles.checkout}
                            btnClick={cartNotification}
                            bgColor='black'
                            text='Check out'
                        />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .mobile {
                        display: none;
                    }
                    .rushOrder,
                    .amount,
                    .subtotal {
                        flex-direction: row;
                    }
                    .subtotal h3 {
                        font-weight: bold;
                    }

                    .subtotal {
                        border-top: 1px solid black;
                        padding-top: 10px;
                        margin-top: 5px;
                    }
                    @media (min-width: 768px) {
                        .priceList div {
                            width: 60%;
                            justify-content: space-between;
                        }
                    }
                    @media (max-width: 768px) {
                        .mobile {
                            display: block;
                            margin-right: 5px;
                            font-size: 15px;
                            margin-bottom: 0px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
