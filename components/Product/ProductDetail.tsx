/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from '../Button';
import { AddToCartAction } from '@store/actions/CartActions';
import { useCart, useCurrency } from '@hooks/.';
import * as ga from '@lib/ga';
import { displayCartSidebar } from '@utils/menu';
import { ProductDetailProps } from '../../types';
import DiscountRibbon from '@components/Icons/DiscountRibbon';
import { getDiscount } from '@utils/.';
import styles from '@styles/ProductDetail.module.css';

export default function ProductDetail({
    product,
}: ProductDetailProps): JSX.Element {
    const {
        wigImages,
        image,
        title,
        price,
        wigStatus,
        productQuantity,
    }: any = product;

    console.log('productDetails', product);

    const dispatch = useDispatch();
    const router = useRouter();
    const [addToCartCounter, setAddToCartCounter] = useState(0);
    const { priceExchange, formatToNumber, symbol } = useCurrency();
    const { cart, showCart, hideCart, products } = useCart();
    const discountRate =
        product.formerPrice && getDiscount(product.formerPrice, product.price);
    useEffect(() => {
        if (products.filter((p) => p.title === title).length === 0) {
            setAddToCartCounter(0);
        }
    }, [products, title]);

    const disableBtnWhenSold = wigStatus === 'sold';
    const disableBtnWhenMax =
        Number(addToCartCounter) >= Number(productQuantity);

    useEffect(() => {
        if (disableBtnWhenMax) {
            toast.error(
                `We only have ${product?.productQuantity} of ${product?.title} in Stock, you can't add more than ${product.productQuantity}`,
            );
        }
    }, [disableBtnWhenMax, addToCartCounter, productQuantity]);

    const addToCartHandler = () => {
        setAddToCartCounter(addToCartCounter + 1);
        const { image, title, price, id, productQuantity } = product;
        showCart();
        ga.event({
            action: 'add_to_cart',
            params: {
                event_category: 'ecommerce',
                event_label: title,
                value: price,
            },
        });
        toast.success(`${title} added to Cart`);
        dispatch(
            AddToCartAction({
                image,
                title,
                price,
                nairaPrice: formatToNumber(priceExchange(price)),
                id,
                productQuantity,
            }),
        );
    };

    const buyProductHandler = () => {
        toast.success(
            `Thanks, for your interest in ${title}, now redirecting you to checkout`,
        );
        dispatch(AddToCartAction({ image, title, price }));
        router.push('/checkout');
    };

    const moreWigImages = wigImages.length > 1;

    const productClass = moreWigImages ? 'productGrid' : 'productFlex';

    function displayPrice(price) {
        return (
            <span className='ml-2'>
                {symbol}
                {priceExchange(price)}
            </span>
        );
    }
    const checkWigStatus = wigStatus === 'sold';

    function productDescription() {
        const soldStyle = checkWigStatus ? 'isSold' : 'isAvailable';
        return (
            <>
                <ToastContainer
                    position='top-left'
                    closeOnClick
                    draggable
                    pauseOnHover
                />
                <div className='product-description'>
                    <div className='product-text'>
                        <span className={`${styles.info} info`}>
                            <h1>{product.title}</h1>
                            <div className={`price-group ${soldStyle}`}>
                                {checkWigStatus && (
                                    <h3 className='text-danger text-center'>
                                        Sold
                                    </h3>
                                )}
                                <h4>Price : {displayPrice(product.price)}</h4>
                                {product.formerPrice && (
                                    <h6>
                                        Old price:
                                        <span>
                                            {displayPrice(product.formerPrice)}
                                        </span>
                                    </h6>
                                )}
                            </div>
                        </span>
                        <p className='font-weight-bold mt-3'>
                            <span className='mr-2'>In Stock:</span>
                            {productQuantity}
                        </p>
                        <p className='description'>{product.description}</p>
                        <p className='tax'>
                            Tax included.{' '}
                            <Link href='/policy/delivery-policy' passHref>
                                <a>Shipping</a>
                            </Link>{' '}
                            calculated at checkout.
                        </p>
                        <h5 className='text-danger'>
                            Note: {productQuantity} of {title} (wig) available
                            in stock, you can&#39;t add more than{' '}
                            {productQuantity}
                        </h5>
                    </div>

                    <span className={styles.btnGrp}>
                        <Button
                            width='200px'
                            btnClassName={styles.addToCart}
                            height='40px'
                            bgColor='transparent'
                            color='black'
                            disabled={disableBtnWhenMax || disableBtnWhenSold}
                            btnClick={addToCartHandler}
                            text='Add to cart'
                        />
                        <Button
                            text='Buy Now'
                            btnClassName={styles.buyNow}
                            width='200px'
                            height='40px'
                            disabled={disableBtnWhenSold}
                            btnClick={buyProductHandler}
                            bgColor='black'
                            color='white'
                        />
                    </span>
                    {product.formerPrice && (
                        <DiscountRibbon discount={discountRate} />
                    )}
                </div>
                <style jsx>{`
                    .product-description {
                        display: flex;
                        width: 100%;
                        padding: 20px 80px;
                    }
                    .product-text {
                        width: 50%;
                        margin-right: 40px;
                    }
                    .isSold h4 {
                        text-decoration: line-through;
                    }
                    .isSold h3 {
                        font-size: 30px;
                    }
                    .price-group {
                        display: flex;
                        flex-direction: column;
                    }
                    .price-group h6 {
                        font: normal normal 20px/30px 'Montserrat', sans-serif;
                    }

                    .price-group h6 span {
                        text-decoration: line-through;
                    }

                    .info {
                        display: flex;
                        justify-content: space-between;
                        margin-right: 50px;
                    }
                    .product-description p {
                        font: normal normal 25px/30px 'Montserrat', sans-serif;
                    }
                    .product-description h1 {
                        font: bold normal 35px/28px 'Montserrat', sans-serif;
                    }
                    .product-description h4 {
                        font: bold normal 30px/28px 'Montserrat', sans-serif;
                    }

                    @media (max-width: 600px) {
                        .product-description {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            margin: 0px auto;
                            padding: 0px 20px;
                        }
                        .product-text {
                            padding: 5px 20px;
                            width: 100%;
                            margin: 0px;
                        }
                        .info {
                            margin-right: 0px;
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
            </>
        );
    }

    return (
        <div className='product-page'>
            <div className='wigStatus'>
                {wigStatus === 'sold' && (
                    <Alert
                        variant='danger'
                        style={{ fontSize: '25px' }}
                        className='d-flex justify-content-center font-weight-bold'
                    >
                        {title} is Sold
                    </Alert>
                )}
            </div>
            <div className={productClass}>
                <div className='mainWigImage'>
                    <Image
                        className={styles.product}
                        data={product.image.responsiveImage}
                    />
                </div>
                <>
                    {moreWigImages
                        ? wigImages.map((wig, index) => (
                              <div
                                  key={index}
                                  className={`wigImage column-${index}`}
                              >
                                  <Image
                                      className={styles.otherImages}
                                      data={wig.responsiveImage}
                                  />
                              </div>
                          ))
                        : productDescription()}
                </>
            </div>

            {displayCartSidebar(cart, hideCart)}
            {wigImages.length > 1 && productDescription()}

            <style jsx>{`
                @media (min-width: 700px) {
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
                    .productFlex {
                        display: flex;
                        align-items: center;
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
}
