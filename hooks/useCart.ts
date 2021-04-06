import { useState, useEffect } from "react";
import { GetLocalStorageProducts } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { AddCartFromStorage } from "../store/actions/CartActions";

const useCart = () => {
    const [cart, setCart] = useState(false);
    const [countProducts, setCountProducts] = useState([]);
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageProduct = JSON.parse(GetLocalStorageProducts());
        setCountProducts(localStorageProduct);
    }, []);

    let localStorageProductCount = countProducts.length;
    let productCount = products.length;

    const addtoCartFromStorage = () => {
        if (localStorageProductCount !== 0 && productCount === 0) {
            dispatch(AddCartFromStorage());
        }
    };
    const displayCart = () => setCart(true);
    const hideCart = () => setCart(false);

    return {
        cart,
        displayCart,
        hideCart,
        products,
        productCount,
        addtoCartFromStorage,
    };
};

export default useCart;
