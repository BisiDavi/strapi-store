/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { Image } from 'react-datocms';
import { FcFullTrash } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { useCurrency } from '@hooks/.';
import { DeleteProductAction } from '@store/actions/counterActions';
import { Button } from '../.';
import { getTotalAmount } from '@utils/.';
import { SelectRushOrder } from '@components/Form/.';
import styles from '@styles/cart.module.css';
import { axiosInstance } from '@axios/axiosInstance';

export default function CartTable({ products }) {
    const [productQty, setProductQty] = useState(0);
    const [notificationData, setNotificationData] = useState({
        email: null,
        products: null,
        totalPrice: null,
        symbol: null,
    });
    const dispatch = useDispatch();
    const [session] = useSession();
    const router = useRouter();
    const { rushOrder } = useSelector((state) => state.rushOrder);
    const userEmail = session?.user?.email || session?.user?.name;
    console.log('session', session);
    const {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
    } = useCurrency();

    const tableTitle = ['Product', 'Name', 'Price', 'Quantity', 'Total'];

    const currencySymbol = symbol !== '$' ? '\u20A6' : '$';

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

    let productArray = [];

    products.map(
        (product) =>
            (productArray = [
                ...productArray,
                {
                    amount: priceExchange(product.amount),
                    count: product.count,
                    image: product.image.responsiveImage.src,
                    title: product.title,
                },
            ]),
    );

    console.log('productArray', productArray);

    useEffect(() => {
        if (session !== null) {
            setNotificationData({
                ...notificationData,
                email: userEmail,
                products: productArray,
                totalPrice: subtotalAmount,
                symbol: currencySymbol,
            });
        }
    }, [products, session]);

    console.log('notificationData', notificationData);

    async function postRequest() {
        await axiosInstance
            .post('/checkout-notification', notificationData)
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => console.error('error', error));
    }

    function cartNotification() {
        postRequest();
        router.push('/checkout');
    }

    return (
        <div className={styles.cartTable}>
            <div className={styles.title}>
                {tableTitle.map((title, index) => (
                    <h3 key={index}>{title}</h3>
                ))}
            </div>
            <div className={styles.cartProduct}>
                {products &&
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
                                    {symbol} {subtotalAmount}
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
                    .priceList,
                    p,
                    h2 {
                        font-family: 'Montserrat', sans-serif;
                    }
                    .subtotal h3 {
                        font: bold normal 20px/28px 'Montserrat', sans-serif;
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
