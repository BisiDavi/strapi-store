import React, { FC } from "react";
import styles from "../../styles/Sidebar.module.css";
import { sidebarProps } from "../../types";
import Sidebar from "./Sidebar";

const CartSidebar: FC<sidebarProps> = ({
    onClose,
    btnClassName,
}): JSX.Element => {
    return (
        <Sidebar onClose={onClose} btnClassName={btnClassName} right>
            <>
                <h1>Hello , I'm the cart sidebar</h1>
            </>
        </Sidebar>
    );
};

export default CartSidebar;
