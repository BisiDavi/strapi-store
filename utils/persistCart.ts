import { useSelector } from "react-redux";

const PersistCart = () => {
    const getCartState = useSelector((state) => state.cart);
    const { products } = getCartState;

    console.log("products, persist-cart", products);
    localStorage.setItem("cart", products);
};

export default PersistCart;
