import React, { useState } from 'react';
import { Image } from 'react-datocms';
import { FcFullTrash } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrency } from '../../hooks';
import { DeleteProductAction } from '../../store/actions/counterActions';
import { Button } from '../.';
import { getTotalAmount } from '../../utils';
import { SelectRushOrder } from '../Form';
import styles from '../../styles/cart.module.css';

const CartTable = (props) => {
    const { products } = props;
    const [productQty, setProductQty] = useState(0);

    const { priceExchange, symbol } = useCurrency();

    const tableTitle = ['Product', 'Name', 'Price', 'Quantity', 'Total'];
    const dispatch = useDispatch();
    const { rushOrder } = useSelector((state) => state.rushOrder);

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

    const rushOrderDropdown = {
        title: '--Choose Rush Order--',
        options: ['--Choose Rush Order--', 'Rush My Orders (+$55.00)'],
    };

    const productsAmount = priceExchange(getTotalAmount(products));
    const rushOrderPrice = priceExchange(Number(rushOrder));

    const getNumber = (value) => {
        const numberString = value.replace(/\,/g, '');
        const number = parseInt(numberString, 10);
        console.log('value', value);
        return number;
    };

    const calculateSubtotal = () => {
        const amount = getNumber(productsAmount);
        const rushPrice = rushOrder !== false ? getNumber(rushOrderPrice) : 0;
        const subtotal = amount + rushPrice;
        return subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const subtotalAmount = calculateSubtotal();

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
                        <div>
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
};

export default CartTable;
