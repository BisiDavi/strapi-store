import React from 'react';
import { useCart, useCurrency } from '../../hooks';
import { Image } from 'react-datocms';
import { MdDeleteForever } from 'react-icons/md';
import styles from '../../styles/checkout.module.css';

const ShoppingBag = () => {
    const { products } = useCart();
    const { priceExchange, symbol } = useCurrency();

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>3</span>SHOPPING BAG
            </div>
            <div className='shoppingBag'>
                {products.map((product, index) => (
                    <div className='item' key={index}>
                        <div className='row1'>
                            <Image
                                className={styles.productImage}
                                data={product.image.responsiveImage}
                            />
                            <div className='text'>
                                <h4>{product.title}</h4>
                                <h5>
                                    {symbol}
                                    {priceExchange(product.price)}
                                </h5>
                            </div>
                            <div className='control'>
                                <span>+</span>
                                <h5>{product.count}</h5>
                                <span>-</span>
                            </div>
                            <div className='delete'>
                                <MdDeleteForever />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .shoppingBag {
                        width: 100%;
                    }
                    .item {
                        position: relative;
                    }
                    .control {
                    }
                    .control span {
                        border: 1px solid;
                    }
                    .control span:last-child {
                        color: red;
                        font-weight: bold;
                        font-size: 25px;
                    }
                    .control span:first-child {
                        color: green;
                        font-weight: 1000;
                        font-size: 25px;
                    }
                    .shoppingBag,
                    .item {
                        display: flex;
                        flex-direction: column;
                        margin: 10px 0px;
                    }
                    .row1 {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .delete {
                        display: block;
                        position: absolute;
                        right: 15px;
                        bottom: 0px;
                    }
                    h4,
                    h5 {
                        margin-bottom: 0px;
                    }
                    .text {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                    }
                    .text h4 {
                        font-size: 16px;
                        margin: 2px 0px;
                    }
                    .text h5 {
                        font-size: 14px;
                        margin: 2px 0px;
                    }
                    .control {
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                    }
                    .control span {
                        font-size: 25px;
                        justify-content: center;
                        height: 25px;
                        width: 25px;
                        display: flex;
                        border-radius: 50%;
                        align-items: center;
                        margin: 0px 15px;
                    }
                `}
            </style>
        </div>
    );
};

export default ShoppingBag;
