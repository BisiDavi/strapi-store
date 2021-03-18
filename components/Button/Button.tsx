import React from "react";
import Link from "next/link";
import { ButtonProps } from "../../types";

const Button = ({
    asLink,
    text,
    linkTo,
    bgColor,
    width,
    styles,
    height,
}: ButtonProps) => {
    return (
        <div>
            {asLink ? (
                <Link href={linkTo} passHref>
                    <button style={styles}>{text}</button>
                </Link>
            ) : (
                <button style={styles}>{text}</button>
            )}
            <style jsx>
                {`
                    background: ${bgColor};
                    height: ${height};
                    width: ${width};
                    color: white;
                    text-align: center;
                    font-family: "raleway";
                    border: none;
                `}
            </style>
        </div>
    );
};

export default Button;
