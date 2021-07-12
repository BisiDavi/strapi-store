import { CartSidebar, MenuSidebar } from '../components/Menu';

export const sidebarState = (menuState) => (menuState ? 'menu opened' : 'menu');

export const displayMenuSidebar = (menu, menuHandler) =>
    menu && (
        <MenuSidebar onClose={menuHandler} btnClassName={sidebarState(menu)} />
    );

export const displayCartSidebar = (cart, cartHandler) =>
    cart && (
        <CartSidebar onClose={cartHandler} btnClassName={sidebarState(cart)} />
    );
