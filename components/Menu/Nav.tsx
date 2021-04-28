import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { CartIcon } from "..";
import { Hamburger } from "../Button";
import { useCart } from "../../hooks";
import {
    displayCartSidebar,
    displayMenuSidebar,
    sidebarState,
} from "../../utils/menu";
import Logo from "../Icons/Logo";
import { toast, ToastContainer } from "react-toastify";

const Nav = () => {
    const [btnState, setBtnstate] = useState(false);
    const [session, loading] = useSession();
    const { showCart, cart, hideCart } = useCart();
    const { productCount } = useCart();
    const hamburgerHandler = () => setBtnstate(true);
    const onCloseHandler = () => setBtnstate(false);

    const signUserout = () => {
        signOut();
        !session && toast.error("You're logged out!.");
    };

    if (typeof window !== "undefined" && loading) return null;
    return (
        <nav className="nav-menu">
            <ToastContainer
                position="top-left"
                closeOnClick
                draggable
                pauseOnHover
            />
            <span className="hamburger">
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={sidebarState(btnState)}
                />
                {displayMenuSidebar(btnState, onCloseHandler)}
            </span>
            <Logo />
            <span className="cart mx-2">
                <CartIcon cartClick={showCart} count={productCount} />
            </span>
            <div className="signupStatus">
                {!session && (
                    <>
                        Not signed in
                        <br /> <button onClick={() => signIn()}>Sign in</button>
                    </>
                )}
                {session && (
                    <>
                        Signed in as {session.user.name} <br />
                        <button onClick={() => signUserout()}>Sign out</button>
                    </>
                )}
            </div>
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
                        padding: 0px 50px;
                        align-items: center;
                        width: 100%;
                    }
                    .signupStatus button {
                        margin: 0px 10px;
                        padding: 10px;
                        border: none;
                        color: white;
                        font-weight: bold;
                        background-color: #ffa6ca;
                    }

                    .signupStatus button:hover {
                        opacity: 0.5;
                    }

                    .signupStatus {
                        display: flex;
                        align-items: center;
                        margin: 0px 20px;
                        font-weight: bold;
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
                            padding: 0px 20px;
                            position: relative;
                        }
                        .signupStatus {
                            position: absolute;
                            right: 0;
                            top: 10px;
                            margin: 0;
                            font-size: 12px;
                        }
                        .signupStatus button {
                            padding: 5px;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default Nav;
