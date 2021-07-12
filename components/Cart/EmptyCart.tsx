import React from 'react';
import Image from 'next/image';

export default function EmptyCart() {
    return (
        <div className='cart-empty'>
            <Image alt='cart icon' height={70} width={70} src='/cartIcon.svg' />
            <h1>
                Dear customer, your cart is empty, please add a product to your
                cart, thank you
            </h1>
            <style jsx>
                {`
                    .cart-empty {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                    }
                    .cart-empty img {
                        margin: 20px 0px;
                    }
                    .cart-empty h1 {
                        font-size: 25px;
                    }
                `}
            </style>
        </div>
    );
}
