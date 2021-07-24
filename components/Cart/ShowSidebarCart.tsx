/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-datocms';
import { useDispatch } from 'react-redux';
import { useCurrency } from '@hooks/.';
import {
    DecrementCounterAction,
    IncrementCounterAction,
} from '@store/actions/counterActions';
import { checkProductCount } from '@utils/.';
import styles from '@styles/CartSidebar.module.css';

interface ShowSidebarCartProps {
    products: any;
}
export default function ShowSidebarCart({
    products,
}: ShowSidebarCartProps): JSX.Element {
    const dispatch = useDispatch();
    const { priceExchange, symbol } = useCurrency();

    const increaseCount = (index) => {
        dispatch(IncrementCounterAction({ products, index }));
    };
    const decreaseCount = (index) => {
        dispatch(DecrementCounterAction({ products, index }));
    };

    return (
        <>
            {products.map((product, index) => {
                const btnState = checkProductCount(product);
                return (
                    <div key={index} className='my-4'>
                        <div className={styles.productProfile}>
                            <Image
                                data={product.image.responsiveImage}
                                className={styles.productImg}
                            />
                            <div className='product-info'>
                                <div className='text'>
                                    <h1>{product.title}</h1>
                                </div>
                                <div className='calculator'>
                                    <div className='controls'>
                                        <button
                                            onClick={() => decreaseCount(index)}
                                        >
                                            {' '}
                                            -{' '}
                                        </button>
                                        <span>{product.count}</span>
                                        <button
                                            disabled={btnState}
                                            onClick={() => increaseCount(index)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={`${styles.price} price`}>
                                        Price: {symbol}
                                        {priceExchange(product.price)}
                                    </div>
                                    <div
                                        className={`${styles.priceAmount} amount`}
                                    >
                                        Amount: {symbol}
                                        {priceExchange(product.amount)}
                                    </div>
                                    <p className='font-weight-bold'>
                                        We only have {product.productQuantity}{' '}
                                        of {product.title} in Stock
                                    </p>
                                </div>
                            </div>
                        </div>
                        <style jsx>
                            {`
                                .text h1 {
                                    color: black;
                                    font-size: 20px;
                                    line-height: 30px;
                                    font-weight: bold;
                                }
                                .controls {
                                    display: flex;
                                    justify-content: space-evenly;
                                    align-items: center;
                                }
                                .controls button {
                                    height: 50px;
                                    width: 50px;
                                    border: none;
                                    font-weight: bold;
                                    font-size: 30px;
                                }
                                .price {
                                    font-size: 20px;
                                    color: black;
                                }
                                .controls {
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-evenly;
                                    align-items: center;
                                }

                                .calculator {
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                }

                                .product-info {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    width: 100%;
                                }

                                .controls button:last-child {
                                    background-color: green;
                                    color: white;
                                }

                                .controls button:first-child {
                                    background-color: red;
                                    color: white;
                                }

                                .controls span {
                                    font-size: 30px;
                                    color: black;
                                }

                                @media (max-width: 768px) {
                                    .price {
                                        margin-top: 10px;
                                    }
                                    .controls button {
                                        height: 40px;
                                        width: 40px;
                                        font-size: 25px;
                                    }
                                }
                            `}
                        </style>
                    </div>
                );
            })}
        </>
    );
}
