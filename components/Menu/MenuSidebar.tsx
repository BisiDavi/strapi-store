import React, { FC } from 'react';
import styles from '../../styles/Sidebar.module.css';
import { sidebarProps } from '../../types';
import Sidebar, { displayMenu } from './Sidebar';

export default function MenuSidebar({
    onClose,
    btnClassName,
}: sidebarProps): JSX.Element {
    const menuArr = {
        menus: [
            { name: 'All Products', link: '/collection/all' },
            {
                name: 'Customize Your Own Unit!',
                link: '/collection/buy-your-custom-wig',
            },
            {
                name: 'Signature Style Wigs',
                link: '/collection/signature-style-wigs',
            },
        ],
        submenus: [
            { name: 'Log in', link: '/auth/login' },
            { name: 'Create Account', link: '/auth/sign-in' },
            { name: 'Privacy Policy', link: '/policy/privacy-policy' },
            { name: 'Refund Policy', link: '/policy/refund-policy' },
            { name: 'Delivery Policy', link: '/policy/delivery-policy' },
            {
                name: 'Terms and Condition',
                link: '/policy/terms-and-conditions',
            },
        ],
    };

    return (
        <Sidebar onClose={onClose} btnClassName={btnClassName}>
            <>
                <div className={styles.menus}>
                    {displayMenu(menuArr.menus, 'menu')}
                </div>
                <div className={styles.submenu}>
                    {displayMenu(menuArr.submenus, 'submenu')}
                </div>
            </>
        </Sidebar>
    );
}
