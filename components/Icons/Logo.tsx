import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/' passHref>
                <a>
                    <Image src='/logo.png' height={70} width={100} />
                </a>
            </Link>
            <style jsx>
                {`
                    .logo {
                        height: 70px;
                        width: 100px;
                        margin: auto;
                    }
                    @media (max-width: 768px) {
                        .logo {
                            margin-top: 0px;
                            height: 60px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Logo;
