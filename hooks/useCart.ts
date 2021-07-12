import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { useSelector, useDispatch } from 'react-redux';
import { AddCartFromStorage } from '@store/actions/CartActions';

export default function useCart() {
    const { GetLocalStorageProducts, SetCartStorage } = useLocalStorage();
    const [cart, setCart] = useState(false);
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    const dispatch = useDispatch();

    let productCount = products.length;
    useEffect(() => {
        if (productCount !== 0) {
            SetCartStorage(products);
        }
    }, [products, SetCartStorage, productCount]);

    function showCart() {
        return setCart(true);
    }
    function hideCart() {
        return setCart(false);
    }

    function persistCart() {
        if (GetLocalStorageProducts().length !== 0)
            return dispatch(AddCartFromStorage());
    }

    return {
        products,
        productCount,
        showCart,
        cart,
        hideCart,
        persistCart,
    };
}
