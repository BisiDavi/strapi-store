import React, { CSSProperties, FC } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Hamburger } from "../Button";
import { menuProps, sidebarProps } from "../../types";

export const displayMenu: FC<menuProps[]> = (menus) => {
    return (
        <ul className="menulist">
            {menus.map((menu) => (
                <li key={uuidv4()}>
                    <Link href={menu.link} passHref>
                        <a>{menu.name}</a>
                    </Link>
                </li>
            ))}
            <style jsx>{`
                .menulist {
                    margin: 10px 5px;
                }
                a:hover {
                    text-decoration: none;
                }
                li {
                    margin: 15px 0px;
                }
            `}</style>
        </ul>
    );
};

const Sidebar: FC<sidebarProps> = ({
    children,
    onClose,
    btnClassName,
    right,
}): JSX.Element => {
    const cartStyles: CSSProperties = right && {
        overflowY: "scroll",
        overflowX: "hidden",
        marginRight: "15px",
    };
    return (
        <div className="Sidebar">
            <div className="sidebar-wrapper">
                {right ? (
                    <>
                        <div className="overlay" onClick={onClose}></div>
                        <div className="drawer" style={cartStyles}>
                            <Hamburger
                                btnClick={onClose}
                                className={btnClassName}
                                right={right}
                            />
                            {children}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="drawer">
                            <Hamburger
                                btnClick={onClose}
                                className={btnClassName}
                            />
                            {children}
                        </div>
                        <div className="overlay" onClick={onClose}></div>
                    </>
                )}
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
                        margin-right: 0px !important;
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
