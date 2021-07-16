/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-datocms';
import Link from 'next/link';
import { useCurrency } from '@hooks/.';
import { ProductProps } from '../../types';
import styles from '@styles/Product.module.css';
import getDiscount from '@utils/getDiscount';
import DiscountTag from '@components/Icons/DiscountTag';

export default function Product({ product }: ProductProps): JSX.Element {
    const { priceExchange, symbol } = useCurrency();
    const discountRate =
        product.formerPrice && getDiscount(product.formerPrice, product.price);
    return (
        <div className={styles.productView}>
            <Link href={`/products/${product.slug}`} passHref>
                <a>
                    <div className='front-view'>
                        <Image
                            className={styles.product}
                            data={product.image.responsiveImage}
                        />
                        {product.formerPrice && (
                            <DiscountTag discount={discountRate} />
                        )}
                    </div>
                    <div className={styles.backView}>
                        <h1>{product.title}</h1>
                        <h3>
                            {symbol}
                            {priceExchange(product.price)}
                        </h3>
                        {product.formerPrice && (
                            <h6>
                                {symbol}
                                {priceExchange(product.formerPrice)}
                            </h6>
                        )}
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .front-view {
                    width: 100%;
                    display: flex;
                    margin: auto;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                }
                h1,
                h3 {
                    font: bold normal 25px/28px 'Montserrat', sans-serif;
                }
                h6 {
                    text-decoration: line-through;
                }
            `}</style>
        </div>
    );
}
