import React from "react";
import styles from "../../styles/CartSidebar.module.css";
import { Image } from "react-datocms";

const ShowSidebarCart = ({ product, increment, decrement }) => {
    return (
        <div className="my-4">
            <div className={styles.productProfile}>
                <Image
                    data={product.image.responsiveImage}
                    className={styles.productImg}
                />
                <div className="product-info">
                    <div className="text">
                        <h1>{product.title}</h1>
                    </div>
                    <div className="calculator">
                        <div className="controls">
                            <button onClick={decrement}>-</button>
                            <span>{product.count}</span>
                            <button onClick={increment}>+</button>
                        </div>
                        <div className="price">Price: ${product.price}</div>
                        <div className="amount">Amount: ${product.amount}</div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .text h1 {
                        color: black;
                        font-size: 25px;
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
                        font-size: 25px;
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

                    .controls span {
                        font-size: 30px;
                        color: black;
                    }
                `}
            </style>
        </div>
    );
};

export default ShowSidebarCart;
