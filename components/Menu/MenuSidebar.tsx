import React, { FC } from "react";
import styles from "../../styles/Sidebar.module.css";
import { sidebarProps } from "../../types";
import Sidebar, { displayMenu } from "./Sidebar";

const MenuSidebar: FC<sidebarProps> = ({
    onClose,
    btnClassName,
}): JSX.Element => {
    const menuArr = {
        menus: [
            { name: "All Products", link: "#all-products" },
            {
                name: "Provide Your Own Bundles",
                link: "#provide-your-own-bundles",
            },
            { name: "Signature Style Wigs", link: "#signature-style-wigs" },
        ],
        submenus: [
            { name: "Log in", link: "#login" },
            { name: "Create Account", link: "#create-account" },
            { name: "Privacy Policy", link: "/policy/privacy-policy" },
            { name: "Refund Policy", link: "/policy/refund-policy" },
            { name: "Delivery Policy", link: "/policy/delivery-policy" },
            {
                name: "Terms and Condition",
                link: "/policy/terms-and-conditions",
            },
        ],
    };

    return (
        <Sidebar onClose={onClose} btnClassName={btnClassName}>
            <>
                <div className={styles.menus}>{displayMenu(menuArr.menus)}</div>
                <div className={styles.submenu}>
                    {displayMenu(menuArr.submenus)}
                </div>
            </>
        </Sidebar>
    );
};

export default MenuSidebar;
