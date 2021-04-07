import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { AddCartFromStorage } from "../store/actions/CartActions";

const useCart = () => {
    const [displayCart, setDisplayCart] = useState(false);
    const [countProducts, setCountProducts] = useState([]);
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    const dispatch = useDispatch();
    const { GetLocalStorageProducts } = useLocalStorage();

    useEffect(() => {
        const localStorageProduct = JSON.parse(GetLocalStorageProducts());
        if (localStorageProduct.length !== 0) {
            setCountProducts(localStorageProduct);
        }
    }, [cartState, products]);

    let localStorageProductCount =
        countProducts !== null ? countProducts.length : 0;
    let productCount = products.length;

    const addtoCartFromStorage = () => {
        if (localStorageProductCount !== 0 && productCount === 0) {
            dispatch(AddCartFromStorage());
        }
    };
    const showCart = () => setDisplayCart(true);
    const hideCart = () => setDisplayCart(false);

    return {
        showCart,
        displayCart,
        hideCart,
        products,
        cartState,
        productCount,
        addtoCartFromStorage,
    };
};

export default useCart;
