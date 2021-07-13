/* eslint-disable jsx-a11y/alt-text */
import Slider from 'react-slick';
import { Image } from 'react-datocms';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { useCurrency } from '@hooks/.';
import style from '@styles/ProductSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProductSliderProps {
    products: any;
}

export default function ProductSlider({
    products,
}: ProductSliderProps): JSX.Element {
    const { priceExchange, symbol } = useCurrency();
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className={style.slider}>
            <h1>You may also like</h1>
            <Slider className={style.productslider} {...settings}>
                {products.map((slider) => (
                    <Link
                        key={uuidv4()}
                        href={`/products/${slider.slug}`}
                        passHref
                    >
                        <div className={style.product}>
                            <Image
                                className={style.productImage}
                                data={slider.image.responsiveImage}
                            />
                            <div className='product-info'>
                                <div className={`${style.info} title`}>
                                    <h4>{slider.title}</h4>
                                    <h6>
                                        {symbol}
                                        {priceExchange(slider.price)}
                                    </h6>
                                </div>
                                <p>{slider.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>

            <style jsx>{`
                h1 {
                    text-align: center;
                    color: #ffa6ca;
                    font-weight: 1000;
                    font: normal normal 30px/28px 'Montserrat', sans-serif;
                }
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: 20px 0px;
                }
                .product-info p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font: normal normal 20px / 28px Montserrat, sans-serif;
                }
                .product-info {
                    color: black;
                    display: flex;
                    flex-direction: column;
                }
                .title h6 {
                    display: flex;
                    align-items: center;
                    font: normal normal 20px/28px 'Montserrat', sans-serif;
                }
                .title h6 img {
                    height: 20px;
                    width: 20px;
                    margin: 0px 2px;
                }
                .product-info h4 {
                    font: normal normal 25px/28px 'Montserrat', sans-serif;
                }
                .product-info h6 {
                    font: bold normal 20px/28px 'Montserrat', sans-serif;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 4vw;
                    }
                    .product-info {
                        margin: 0px;
                    }
                    .product-info p {
                        margin-bottom: 5px;
                        font-size: 20px;
                    }
                }
                @media (max-width: 450px) {
                    h1 {
                        font-size: 16px;
                        margin-bottom: 0px;
                        margin-top: 5px;
                    }
                    .product-info p {
                        font-size: 16px;
                    }
                    .product-info h6,
                    .product-info h4 {
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .title {
                        margin: 10px 5px 0px 5px;
                    }
                }
            `}</style>
        </div>
    );
}
