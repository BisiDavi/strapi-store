/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import { Image } from 'react-datocms';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { AddToCartAction } from '../../store/actions/CartActions';
import { useCart } from '../../hooks';
import { displayCartSidebar } from '../../utils/menu';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../../styles/ProductDetail.module.css';
import { useCurrency } from '../../hooks';
import { ProductDetailProps } from '../../types';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail: FC<ProductDetailProps> = ({ product }): JSX.Element => {
    const { wigImages }: any = product;
    const dispatch = useDispatch();
    const { priceExchange, symbol } = useCurrency();
    const router = useRouter();
    const { cart, showCart, hideCart } = useCart();
    const addToCartHandler = () => {
        const { image, title, price } = product;
        showCart();
        toast.success('Product added to Cart');
        dispatch(AddToCartAction({ image, title, price }));
    };
    const buyProductHandler = () => {
        const { image, title, price } = product;
        toast.success(
            `Thanks, for your interest in ${title}, now redirecting you to checkout`,
        );
        dispatch(AddToCartAction({ image, title, price }));
        router.push('/checkout');
    };
    return (
        <div className='product-page'>
            <div className='productGrid'>
                <div className='mainWigImage'>
                    <Image
                        className={styles.product}
                        data={product.image.responsiveImage}
                    />
                </div>
                {wigImages.map((wig, index) => (
                    <div key={index} className={`wigImage column-${index}`}>
                        <Image
                            className={styles.otherImages}
                            data={wig.responsiveImage}
                        />
                    </div>
                ))}
            </div>

            <ToastContainer
                position='top-left'
                closeOnClick
                draggable
                pauseOnHover
            />

            {displayCartSidebar(cart, hideCart)}

            <div className='product-description'>
                <div className='product-text'>
                    <span className={`${styles.info} info`}>
                        <h1>{product.title}</h1>
                        <h4>
                            {symbol}
                            {priceExchange(product.price)}
                        </h4>
                    </span>
                    <p className='description'>{product.description}</p>
                    <p className='tax'>
                        Tax included.{' '}
                        <Link href='/policy/delivery-policy' passHref>
                            <a>Shipping</a>
                        </Link>{' '}
                        calculated at checkout.
                    </p>
                </div>
                <span className={styles.btnGrp}>
                    <Button
                        width='200px'
                        btnClassName={styles.addToCart}
                        height='40px'
                        bgColor='transparent'
                        color='black'
                        btnClick={addToCartHandler}
                        text='Add to cart'
                    />
                    <Button
                        text='Buy Now'
                        btnClassName={styles.buyNow}
                        width='200px'
                        height='40px'
                        btnClick={buyProductHandler}
                        bgColor='black'
                        color='white'
                    />
                </span>
            </div>

            <style jsx>{`
                .product-image {
                    margin: 50px 0px 0px 0px;
                }
                .other-image {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 50px 0px;
                }

                .product-description {
                    display: flex;
                    width: 80%;
                    margin: 20px 80px;
                }
                .product-text {
                    width: 50%;
                    margin-right: 40px;
                }
                .info {
                    display: flex;
                    justify-content: space-between;
                    margin-right: 50px;
                }
                .product-description p {
                    font-size: 25px;
                }
                .product-description h1 {
                    font-weight: bold;
                }
                .product-description h4 {
                    font-size: 35px;
                    font-weight: bold;
                }
                @media (min-width: 1400px) {
                    .other-image {
                        grid-template-rows: 425px 425px;
                    }
                }
                @media (min-width: 600px) {
                    .productGrid {
                        display: grid;
                        grid-template-columns: 2fr 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        grid-gap: 15px;
                        margin: 30px;
                    }
                    .mainWigImage {
                        grid-column: 1;
                        grid-row: 1/3;
                    }
                }
                @media (max-width: 600px) {
                    .product-description {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin: 0px auto;
                    }
                    .product-text {
                        padding: 5px 20px;
                        width: 100%;
                        margin: 0px;
                    }

                    .product-image {
                        margin: 20px;
                    }
                    .product-description p {
                        font-size: 16px;
                    }

                    .tax a {
                        color: red;
                    }
                    .info h1,
                    .info h4 {
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetail;
