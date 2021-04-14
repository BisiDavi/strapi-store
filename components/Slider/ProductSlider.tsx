import React, { FC } from "react";
import Slider from "react-slick";
import { Image } from "react-datocms";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import style from "../../styles/ProductSlider.module.css";
import { useCurrency } from "../../hooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductSliderProps {
    products: any;
}

const ProductSlider: FC<ProductSliderProps> = ({ products }): JSX.Element => {
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
                            <div className="product-info">
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
                h1{
                    text-align:center;
                    color:#ffa6ca;
                    font-weight:1000;
                    font-size:2.5vw;
                }
                .title{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    margin:20px 0px;
                }
                .product-info p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .product-info {
                    color: black;
                    display:flex;
                    flex-direction:column;
                }
                .title h6{
                    display:flex;
                    align-items:center;
                }
                .title h6 img{
                    height:20px;
                    width:20px;
                    margin:0px 2px;
                }
                .product-info h4 {
                    font-size: 25px;
                }
                .product-info h6 {
                    font-size: 20px;
                    font-weight: bold;
                }
                @media(max-width:768px){
                    h1{
                        font-size:7vw;
                    }
                    .product-info{
                        margin: 0px;
                    }
                    .product-info p{
                        margin-bottom:5px;
                    }
                }
             }
            `}</style>
        </div>
    );
};

export default ProductSlider;
