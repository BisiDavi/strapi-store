import React from "react";
import { v4 as uuidv4 } from "uuid";
import CollectionView from "./CollectionView";

const Collections = () => {
    const collections = [
        {
            img: "/customwig.webp",
            name: "Customize Your Own Unit!",
            link: "/collection/buy-your-custom-wig",
            text: "Buy your custom wig, at an affordable rate",
        },
        {
            img: "/stylewig.webp",
            name: "Signature Style Wigs",
            link: "/collection/signature-style-wigs",
            text: "Get awesome signature wigs.",
        },

        {
            img: "/shipWig.webp",
            name: "Ready to Ship wigs",
            link: "/collection/ready-to-ship",
            text: "Oh yes, All wigs are available for shipping.",
        },
    ];
    return (
        <div className="collections">
            {collections.map((collection) => (
                <CollectionView key={uuidv4()} collection={collection} />
            ))}

            <style jsx>
                {`
                    .collections {
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(450px, 1fr)
                        );
                        grid-gap: 35px;
                        margin: 50px 30px;
                    }

                    @media (max-width: 768px) {
                        .collections {
                            grid-template-columns: 1fr;
                            margin: 20px 30px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Collections;
