import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks";
import { useSelector, useDispatch } from "react-redux";
import { AddCartFromStorage } from "../store/actions/CartActions";

// lsProduct means localStorageProducts
const useCart = () => {
    const [displayCart, setDisplayCart] = useState(false);
    const [lsProducts, setLsProducts] = useState([]);
    const { SetCartStorage } = useLocalStorage();
    const cartState = useSelector((state) => state.cart);
    const { products } = cartState;
    const dispatch = useDispatch();
    const { GetLocalStorageProducts } = useLocalStorage();

    useEffect(() => {
        const getLsProduct = GetLocalStorageProducts();
        if (getLsProduct.length !== 0) {
            setLsProducts(getLsProduct);
        }
        console.log("product", products);
        addtoCartFromStorage();
    }, []);

    useEffect(() => SetCartStorage(products), []);

    console.log("lsProducts", lsProducts);

    let localStorageProductCount = lsProducts !== null ? lsProducts.length : 0;
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
