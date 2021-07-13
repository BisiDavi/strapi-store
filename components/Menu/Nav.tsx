import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { toast, ToastContainer } from 'react-toastify';
import { CartIcon } from '..';
import { Hamburger } from '../Button';
import { useCart } from '@hooks/.';
import {
    displayCartSidebar,
    displayMenuSidebar,
    sidebarState,
} from '@utils/menu';
import Logo from '../Icons/Logo';
import 'react-toastify/dist/ReactToastify.css';

export default function Nav() {
    const [btnState, setBtnstate] = useState(false);
    const [session, loading] = useSession();
    const { showCart, cart, hideCart, productCount } = useCart();

    const hamburgerHandler = () => setBtnstate(true);
    const onCloseHandler = () => setBtnstate(false);
    const logUserIn = () => {
        signIn();
        session && loginNotification();
    };

    const loginNotification = () => {
        toast.success(`${session.user.name}, you're logged in`);
    };
    return (
        <nav className='nav-menu'>
            <span className='hamburger'>
                <Hamburger
                    btnClick={hamburgerHandler}
                    className={sidebarState(btnState)}
                />
                {displayMenuSidebar(btnState, onCloseHandler)}
            </span>
            <Logo />
            <span className='cart mx-2'>
                <CartIcon cartClick={showCart} count={productCount} />
            </span>
            <div className='signupStatus'>
                {!session && (
                    <>
                        Not signed in
                        <br /> <button onClick={logUserIn}>Sign in</button>
                    </>
                )}
                {session && (
                    <>
                        Hello {session.user?.name || session.user.email} <br />
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                )}
            </div>
            {displayCartSidebar(cart, hideCart)}
            <ToastContainer
                position='top-left'
                closeOnClick
                draggable
                pauseOnHover
            />
            <style jsx>
                {`
                    nav.nav-menu {
                        display: flex;
                        justify-content: space-between;
                        padding: 0px 50px;
                        align-items: center;
                        width: 100%;
                        height: 110px;
                        font-family: 'Montserrat', sans-serif;
                        position: relative;
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
                        align-items: flex-end;
                        margin: 0px 20px;
                        font-weight: bold;
                    }
                    @media (min-width: 768px) {
                        span.cart.mx-2 {
                            position: absolute;
                            right: 120px;
                            top: 25px;
                            z-index: 1;
                        }

                        .signupStatus {
                            position: absolute;
                            right: 0px;
                            z-index: 0;
                            height: 55px;
                        }
                    }
                    @media (max-width: 768px) {
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
                            padding-top: 30px;
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
}
