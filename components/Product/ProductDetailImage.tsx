import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { getStrapiMedia } from "../../utils/medias";

const ProductDetailImage = ({ image }): JSX.Element => {
    return (
        <div className="product">
            <span className="mainImage">
                <Image
                    src={getStrapiMedia(image.url)}
                    height={500}
                    key={uuidv4()}
                    width={500}
                    layout="responsive"
                />
            </span>
            <style jsx>
                {`
                    .product {
                        display: grid;
                        grid-template-column: 1fr 1fr;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    );
};

export default ProductDetailImage;
