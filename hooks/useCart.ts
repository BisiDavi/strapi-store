import React, { useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState(false);

    const displayCart = () => setCart(true);
    const hideCart = () => setCart(false);
    return {
        cart,
        displayCart,
        hideCart,
    };
};

export default useCart;
