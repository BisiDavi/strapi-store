import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="logo">
            <Link href="/" passHref>
                <a>
                    <Image
                        src="/logo.jpg"
                        height={100}
                        width={100}
                        layout="responsive"
                    />
                </a>
            </Link>
            <style jsx>
                {`
                    .logo {
                        height: 150px;
                        width: 150px;
                        margin: auto;
                    }
                `}
            </style>
        </div>
    );
};

export default Logo;
