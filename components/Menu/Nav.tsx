import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "..";
import { Hamburger } from "../Button";
import { useCart } from "../../hooks";
import {
    displayCartSidebar,
    displayMenuSidebar,
    sidebarState,
} from "../../utils/menu";

const Nav = () => {
    const [btnState, setBtnstate] = useState(false);
    const { cart, displayCart, hideCart, cartCount } = useCart();
    const hamburgerHandler = () => setBtnstate(true);
    const onCloseHandler = () => setBtnstate(false);
    return (
        <nav className="nav-menu">
            <span className="hamburger">
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={sidebarState(btnState)}
                />
                {displayMenuSidebar(btnState, onCloseHandler)}
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
                <CartIcon cartClick={displayCart} count={cartCount} />
            </span>
            {displayCartSidebar(cart, hideCart)}
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
                        -webkit-box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 69%);
                        -moz-box-shadow: 0px 15px 17px 0px rgba(0, 0, 0, 0.69);
                        box-shadow: 0px 1px 10px 0px rgb(0 0 0 / 69%);
                        margin-bottom: 15px;
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
