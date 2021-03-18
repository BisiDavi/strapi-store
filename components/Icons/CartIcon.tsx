import React from "react";

const CartIcon = ({ count }) => {
    return (
        <div className="cartIcon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100%"
                viewBox="0 0 164.9 196.4"
                preserveAspectRatio="xMinYMax meet"
                data-hook="svg-icon-9"
            >
                <text
                    x="84"
                    y="131"
                    dy=".35em"
                    textAnchor="middle"
                    className="cart-count"
                    data-hook="items-count"
                >
                    {count}
                </text>
                <path d="M81.9 11.5c-18.8 0-34.1 16-34.1 35.7v18.1h7.8V47.2c0-15.4 11.8-27.9 26.4-27.9 14.5 0 26.4 12.5 26.4 27.9v18.1h6.6V64h1.1V47.2c-.1-19.7-15.4-35.7-34.2-35.7z"></path>
                <path d="M156.9 70.5v118H8v-118h148.9m8-8H0v134h164.9v-134z"></path>
            </svg>
            <style jsx>
                {`
                    .cart-count {
                        color: red;
                        font-size: 6em;
                    }
                    .cartIcon {
                        height: 100%;
                        width: 25px;
                    }
                `}
            </style>
        </div>
    );
};

export default CartIcon;
