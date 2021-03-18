import React from "react";
import Image from "next/image";
import { Button } from "..";

const HomeBanner = () => {
    return (
        <div className="Homebanner">
            <div className="overlay">
                <h3>WELCOME TO JENJEN'S LUXURY WIG</h3>
                <div className="welcometext">
                    <Image
                        src="/shopArrivalText.webp"
                        height={60}
                        width={1000}
                        layout="responsive"
                    />
                </div>
                <span className="button">
                    <Button
                        text="SHOP NOW"
                        linkTo="#shop"
                        bgColor="linear-gradient(90deg, #a43c59 0%, #cb4a6e 49%, #a43c59 100%)"
                        width="250px"
                        height="50px"
                    />
                </span>
            </div>
            <style jsx>
                {`
                    .overlay {
                        background: rgba(0, 0, 0, 0.6);
                        width: 100%;
                        height: 500px;
                        justify-content: center;
                        padding: 120px 0px;
                    }
                    h3 {
                        font-size: 50px;
                        color: white;
                        font-weight: 1000;
                        text-align: center;
                    }
                    .Homebanner {
                        background-image: url("./mainBg.webp");
                        height: 500px;
                        background-size: cover;
                        width: 100%;
                        height: 500px;
                        display: flex;
                        flex-direction: column;
                        margin: auto;
                        justify-content: center;
                        font-family: "raleway";
                        align-items: center;
                    }
                    .welcometext {
                        margin: 20px auto;
                        width: 60%;
                    }
                    .button {
                        background-color: #b44262;
                        height: 35px;
                        width: 150px;
                        display: flex;
                        color: white;
                        text-align: center;
                        justify-content: center;
                        font-family: "raleway";
                        border: none;
                        margin: auto;
                    }
                    @media (max-width: 768px) {
                        h3 {
                            font-size: 1.5em;
                        }
                        .welcometext {
                            width: 80%;
                            margin: 50px auto -20px auto;
                        }
                        span.button {
                            margin: 80px auto 0px auto;
                        }
                        .overlay,
                        .Homebanner {
                            height: 350px;
                        }
                        .overlay {
                            padding: 60px 0px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default HomeBanner;
