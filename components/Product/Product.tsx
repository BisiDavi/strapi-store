import React, { FC } from "react";
import { Image } from "react-datocms";
import Link from "next/link";
import { ProductProps } from "../../types";

const Product: FC<ProductProps> = ({ product }): JSX.Element => {
    return (
        <div className="productView">
            <Link href={`/products/${product.slug}`} passHref>
                <a>
                    <div className="front-view">
                        <Image data={product.image.responsiveImage} />
                    </div>
                    <div className="back-view">
                        <h1>{product.title}</h1>
                        <h3>${product.price}</h3>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .productView {
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    width: 100%;
                    position: relative;
                }

                .back-view {
                    display: none;
                }
                .back-view h1 {
                    color: #ffa6ca;
                    font-size: 1.8em;
                    font-weight: 1000;
                }
                .back-view {
                    font-family: "Karla", sans-serif;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    letter-spacing: 0.05em;
                }
                .back-view h3 {
                    color: black;
                    font-weight: 700;
                    font-size: 2em;
                }
                .productView:hover .back-view {
                    display: flex;
                    position: absolute;
                    text-align: center;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                    top: 0px;
                    height: 100%;
                    width: 100%;
                    background-color: rgb(255 255 255 / 80%);
                    z-index: 1000;
                    transition: opacity 0.4s ease;
                }

                .front-view {
                    width: 100%;
                    display: flex;
                    margin: auto;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
};

export default Product;
