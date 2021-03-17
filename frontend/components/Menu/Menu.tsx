import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "../.";
import { Hamburger } from "../Button";
import Sidebar from "./Sidebar";

const Nav = () => {
    const [btnState, setBtnstate] = useState(false);

    const btnClassName = btnState ? "menu opened" : "menu";
    const hamburgerHandler = () => setBtnstate(true);
    const onCloseHandler = () => setBtnstate(false);
    const displaySidebar = () =>
        btnState && (
            <Sidebar onClose={onCloseHandler} btnClassName={btnClassName} />
        );

    return (
        <nav className="nav-menu">
            <span className="hamburger">
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={btnClassName}
                />
                {displaySidebar()}
            </span>
            <span className="image">
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
            </span>
            <span className="cart">
                <CartIcon count={0} />
            </span>
            <style jsx>
                {`
                    .image {
                        height: 150px;
                        width: 150px;
                    }
                    nav.nav-menu {
                        display: flex;
                        justify-content: space-between;
                        padding: 0px 120px 0px 20px;
                        align-items: center;
                        width: 100%;
                    }
                    @media (max-width: 768px) {
                        .image {
                            height: 5%;
                            width: 30%;
                            margin: auto;
                        }
                        .cart {
                            position: absolute;
                            left: 20px;
                            height: 30px;
                        }
                        .hamburger {
                            height: 50px;
                            width: 50px;
                            position: absolute;
                            right: 10px;
                        }
                        nav.nav-menu {
                            padding: 0px 22px;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Nav;
