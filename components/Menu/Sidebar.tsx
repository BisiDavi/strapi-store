import React, { FC } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Sidebar.module.css";
import { Hamburger } from "../Button";

interface menuProps {
    name: string;
    link: string;
}

interface sidebarProps {
    onClose: () => void;
    btnClassName: string;
}

const Sidebar: FC<sidebarProps> = ({ onClose, btnClassName }): JSX.Element => {
    const menus = [
        { name: "All Products", link: "#all-products" },
        { name: "Provide Your Own Bundles", link: "#provide-your-own-bundles" },
        { name: "Signature Style Wigs", link: "#signature-style-wigs" },
    ];

    const submenus = [
        { name: "Log in", link: "#login" },
        { name: "Create Account", link: "#create-account" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Refund Policy", link: "/refund-policy" },
        { name: "Delivery Policy", link: "/delivery-policy" },
        { name: "Terms and Condition", link: "/terms-and-conditions" },
    ];

    const displayMenu: FC<menuProps[]> = (menus): JSX.Element => {
        return (
            <ul className="menulist">
                {menus.map((menu) => (
                    <Link key={uuidv4()} href={menu.link}>
                        <li>{menu.name}</li>
                    </Link>
                ))}
                <style jsx>{`
                    .menulist {
                        margin: 10px 5px;
                    }

                    li {
                        margin: 15px 0px;
                    }
                `}</style>
            </ul>
        );
    };

    return (
        <div className="Sidebar">
            <div className="sidebar-wrapper">
                <div className="drawer">
                    <Hamburger btnClick={onClose} className={btnClassName} />
                    <div className={styles.menus}>{displayMenu(menus)}</div>
                    <div className={styles.submenu}>
                        {displayMenu(submenus)}
                    </div>
                </div>
                <div className="overlay" onClick={onClose}></div>
            </div>
            <style jsx>{`
                .Sidebar {
                    position: fixed;
                    left: 0px;
                    display: fixed;
                    top: 0px;
                    z-index: 1000000;
                    width: 100%;
                    height: 100vh;
                }
                .sidebar-wrapper {
                    height: 100vh;
                    width: 100vw;
                    display: flex;
                }
                .overlay {
                    background-color: rgba(0, 0, 0, 0.7);
                    height: inherit;
                    width: 90vw;
                }
                .drawer {
                    height: 100vh;
                    background-color: white;
                    color: #ffa6ca;
                    width: 20vw;
                    font-family: Karla, sans-serif;
                    font-weight: 700;
                    z-index: 100000;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    letter-spacing: 0.05em;
                    margin: 0 0 0.66667em;
                    line-height: 1.4;
                }
                @media (max-width: 768px) {
                    .drawer {
                        width: 100vw;
                    }
                    .overlay {
                        width: 50vw;
                    }
                }
            `}</style>
        </div>
    );
};

export default Sidebar;
