import React, { useState } from 'react';
import { Image } from 'react-datocms';
import { FcFullTrash } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useCurrency } from '../../hooks';
import { DeleteProductAction } from '../../store/actions/counterActions';
import { Button } from '../.';
import styles from '../../styles/cart.module.css';
import { getTotalAmount } from '../../utils';

const CartTable = (props) => {
    const { products, displayShowTextarea, showTextarea } = props;
    const [productQty, setProductQty] = useState(0);

    const { priceExchange, symbol } = useCurrency();

    const tableTitle = ['Product', 'Name', 'Price', 'Quantity', 'Total'];
    const dispatch = useDispatch();
    const deleteProduct = (index) => {
        dispatch(DeleteProductAction({ products, index }));
    };
    const inputHandler = (index) => (e) => {
        e.preventDefault();
        setProductQty(Number(e.target.value));
        products[index].count = e.target.value;
        let newAmount = products[index].count * products[index].price;
        products[index].amount = newAmount;
    };
    return (
        <div className={styles.cartTable}>
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
                                <h3> "{product.title}"</h3>
                                <FcFullTrash
                                    onClick={() => deleteProduct(index)}
                                />
                            </div>
                            <div className={styles.price}>
                                <p className='mobile'>Price</p>
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
                                <p className='mobile'>Amount</p>
                                {symbol}
                                {priceExchange(product.amount)}
                            </div>
                        </div>
                    ))}
                <div className={styles.calculator}>
                    <div className={styles.textareaRow}>
                        <p onClick={displayShowTextarea}>
                            Special instructons for seller
                        </p>
                        {showTextarea && <textarea></textarea>}
                    </div>
                    <div className={styles.subtotal}>
                        <div>
                            <h3>Subtotal</h3>
                            <h2 className={styles.price}>
                                {symbol}
                                {priceExchange(getTotalAmount(products))}
                            </h2>
                            <p>
                                Tax included. Shipping calculated at checkout.
                            </p>
                        </div>

                        <Button
                            color='white'
                            btnClassName={styles.checkout}
                            linkTo='/checkout'
                            bgColor='black'
                            text='Check out'
                            asLink
                        />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .mobile {
                        display: none;
                    }
                    @media (max-width: 768px) {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    );
};

export default CartTable;
