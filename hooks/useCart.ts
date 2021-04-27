import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { useSelector, useDispatch } from "react-redux";
import { AddCartFromStorage } from "../store/actions/CartActions";

// 1. check if localStorage has cart done
// 2. if ls doesn't have cart, set a cart. done
// 3. if cart in ls has products, populate the products to redux store
// and  assess products from store in the ui.
// 4. if ls-cart is empty use redux store.

const useCart = () => {
    const { GetLocalStorageProducts, SetCartStorage } = useLocalStorage();
    const [cart, setCart] = useState(false);
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    console.log("useCart | products", products);
    const dispatch = useDispatch();

    let productCount = products.length;
    useEffect(() => {
        if (productCount !== 0) {
            console.log("I am implemented, useCart useEffect");
            SetCartStorage(products);
        }
    }, [products]);

    const showCart = () => setCart(true);
    const hideCart = () => setCart(false);

    const persistCart = () => {
        if (GetLocalStorageProducts().length !== 0)
            dispatch(AddCartFromStorage());
    };

    return {
        products,
        productCount,
        showCart,
        cart,
        hideCart,
        persistCart,
    };
};

export default useCart;
