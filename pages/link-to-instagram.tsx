import React from "react";
import { Pagelayout } from "../container";

// GetInstagramShortToken


const InstagramAccess = () => {
    return (
        <Pagelayout title="link-to-instagram">
            <div className="instagram-link">
                <h1 className="text-center">
                    Hello Jennifer, to link you site to instagram and display
                    your instagram post on your site, click on the button below
                </h1>
                <a
                    className="mx-auto button"
                    href="https://www.instagram.com/oauth/authorize?client_id=710736562936672&redirect_uri=https://www.jenjensluxury.com/&scope=user_profile,user_media&response_type=code"
                >
                    <button>Link to Instagrm </button>
                </a>
            </div>
            <style jsx>
                {`
                    .instagram-link {
                        height: 450px;
                        flex-direction: column;
                        display: flex;
                        width: 100%;
                        margin: auto;
                        justify-content: center;
                    }
                    a.mx-auto.button button {
                        border: none;
                        padding: 10px 20px;
                        font-weight: bold;
                        background-color: black;
                        color: white;
                    }

                    a.mx-auto.button {
                        display: flex;
                        margin: 20px auto;
                        justify-content: center;
                    }

                    h1.text-center {
                        font-size: 18px;
                        text-align: center;
                        margin: 20px auto;
                    }
                `}
            </style>
        </Pagelayout>
    );
};

export default InstagramAccess;
