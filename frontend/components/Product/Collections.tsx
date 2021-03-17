import React from "react";
import { v4 as uuidv4 } from "uuid";
import CollectionView from "./CollectionView";

const Collections = () => {
    const collections = [
        {
            img: "/customwig_temp.webp",
            name: "Customize Your Own Unit!",
            text: "Buy your custom wig, at an affordable rate",
        },
        {
            img: "/stylewig_temp.webp",
            name: "Signature Style Wigs",
            text: "Get awesome signature wigs.",
        },
        {
            img: "/bundle_temp.png",
            name: "Provide your own wig bundle",
            text: "Do you want a wig bundle?",
        },
        {
            img: "/shipCollection_temp.webp",
            name: "Ready to Ship wigs",
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
                        grid-template-columns: repeat(4, 1fr);
                        grid-gap: 25px;
                        margin: 50px 30px;
                    }
                    @media (max-width: 768px) {
                        .collections {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Collections;
