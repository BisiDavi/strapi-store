import React from "react";
import Image from "next/image";

const InstagramSlider = ({ medias }) => {
    return (
        <div className="medias">
            {medias.map((media, index) => (
                <span key={index}>
                    <Image
                        src={media}
                        height={200}
                        width={200}
                        className="instagramImage"
                    />
                </span>
            ))}
        </div>
    );
};

export default InstagramSlider;
