/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Image } from 'react-datocms';
import Link from 'next/link';
import { useCurrency } from '@hooks/.';
import { ProductProps } from '../../types';
import styles from '@styles/Product.module.css';

export default function Product({ product }: ProductProps): JSX.Element {
    const { priceExchange, symbol } = useCurrency();
    return (
        <div className={styles.productView}>
            <Link href={`/products/${product.slug}`} passHref>
                <a>
                    <div className='front-view'>
                        <Image
                            className={styles.product}
                            data={product.image.responsiveImage}
                        />
                    </div>
                    <div className={styles.backView}>
                        <h1>{product.title}</h1>
                        <h3>
                            {symbol}
                            {priceExchange(product.price)}
                        </h3>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .front-view {
                    width: 100%;
                    display: flex;
                    margin: auto;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
}
