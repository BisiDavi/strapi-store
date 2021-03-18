import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const ServicesBanner = () => {
    const bannerImg = ["shopHairwigs", "minkLashes", "FAQ", "Accessories"];
    const displayServices = () =>
        bannerImg.map((img) => (
            <Image
                key={uuidv4()}
                src={`/${img}.webp`}
                height={200}
                width={400}
            />
        ));

    return (
        <div className="our-services">
            <div className="serviceBanners">{displayServices()}</div>
            <style jsx>
                {`
                    .our-services {
                        display: flex;
                        justify-content: center;
                        margin: 50px auto;
                        width: 100%;
                    }
                    .serviceBanners {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                        grid-gap: 30px;
                    }
                    @media (max-width: 768px) {
                        .our-services {
                            margin: 10px auto;
                        }
                        .serviceBanners {
                            grid-template-columns: 1fr;
                            grid-gap: 15px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ServicesBanner;
