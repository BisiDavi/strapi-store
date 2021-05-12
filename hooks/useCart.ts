import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { useSelector, useDispatch } from 'react-redux';
import { AddCartFromStorage } from '../store/actions/CartActions';

const useCart = () => {
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
