import React from "react";

const PromoBanner = () => {
    return (
        <div className="promoBanner">
            <h4>
                Shop JenJen's Luxury Hair |Get virgin Hair at Affordable Price{" "}
            </h4>
            <style jsx>{`
                .promoBanner {
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    height: 30px;
                }
                h4 {
                    color: #ffa6ca;
                    margin: 0px;
                    padding: 0px;
                    align-items: center;
                    display: flex;
                    font: 700 normal 1.2em/1.6 "Open Sans", sans-serif;
                }
                @media (max-width: 768px) {
                    h4 {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PromoBanner;
