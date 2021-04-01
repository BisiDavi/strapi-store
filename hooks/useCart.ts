import React, { useState } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
    const [cart, setCart] = useState(false);
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;

    const cartCount = products.length;

    const displayCart = () => setCart(true);
    const hideCart = () => setCart(false);
    return {
        cart,
        displayCart,
        hideCart,
        cartCount
    };
};

export default useCart;
