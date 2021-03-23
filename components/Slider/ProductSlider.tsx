import React, { useRef, useState, FC } from "react";
import Slider from "react-slick";
import { Image } from "react-datocms";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import style from "../../styles/ProductSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductSliderProps {
    products: any;
}

const ProductSlider: FC<ProductSliderProps> = ({ products }): JSX.Element => {
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

    console.log("otherProducts", products);

    return (
        <div className="ProductSlider">
            <h1>You may also like</h1>
            <Slider className={style.productslider} {...settings}>
                {products.map((slider) => (
                    <div key={uuidv4()} className="product">
                        <Link href={`/products/${slider.slug}`} passHref>
                            <Image
                                className={style.productImage}
                                data={slider.image.responsiveImage}
                            />
                        </Link>
                        <div className="product-info">
                            <h4>{slider.title}</h4>
                            <h6>${slider.price}</h6>
                            <p>{slider.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            <style jsx>{`
                h1{
                    text-align:center;
                    color:pink
                }
                .ProductSlider {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    background-color: #f6f6f6;
                    padding: 10px;
                    display:flex;
                    flex-direction:column;
                }
                .product {
                    color: white;
                    width: 100%;
                    background-color:white;
                    height: 500px;
                    display: flex;
                    margin: 0px 20px;
                    border-radius: 5px;
                    border: 5px solid white;
                    flex-direction:column;
                    justify-product: center;
                    align-item: center;
                }
                .product-info {
                    color: black;
                }
                .product-info h4 {
                    font-size: 25px;
                }
                .product-info h6 {
                    font-size: 20px;
                    font-weight: bold;
                }
             }
            `}</style>
        </div>
    );
};

export default ProductSlider;
