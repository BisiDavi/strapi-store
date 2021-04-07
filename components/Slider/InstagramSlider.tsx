import React from "react";
import Image from "next/image";
import InstagramMedia from "./instagram.json";

const InstagramSlider = () => {
    console.log(",InstagramMedia", InstagramMedia);
    return (
        <div className="medias">
            {InstagramMedia.map((media, index) => (
                <span key={index}>
                    <Image
                        src={media.media_url}
                        height={200}
                        width={200}
                        className="instagramImage"
                    />
                </span>
            ))}

            <style jsx>
                {`
                    .medias {
                        display: flex;
                    }
                    .medias span {
                        border: 5px solid white;
                    }
                `}
            </style>
        </div>
    );
};

export default InstagramSlider;
