import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CartIcon } from "..";
import { Hamburger } from "../Button";
import { useCart } from "../../hooks";
import {
    displayCartSidebar,
    displayMenuSidebar,
    sidebarState,
} from "../../utils/menu";
import Logo from "../Icons/Logo";

const Nav = () => {
    const [btnState, setBtnstate] = useState(false);
    const { cart, displayCart, hideCart } = useCart();
    const { products } = useSelector((state) => state.cart);

    const hamburgerHandler = () => setBtnstate(true);
    const onCloseHandler = () => setBtnstate(false);
    const productCount = products.length;
    return (
        <nav className="nav-menu">
            <span className="hamburger">
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={sidebarState(btnState)}
                />
                {displayMenuSidebar(btnState, onCloseHandler)}
            </span>
            <Logo />
            <span className="cart">
                <CartIcon cartClick={displayCart} count={productCount} />
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
