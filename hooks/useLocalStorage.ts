const useLocalStorage = () => {
    const SetCartStorage = (cart) => {
        console.log("set_cart", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const GetLocalStorageProducts = () => {
        const productFromStorage = localStorage.getItem("cart");
        const checkStorage = productFromStorage !== null && productFromStorage;
        return checkStorage;
    };

    return {
        SetCartStorage,
        GetLocalStorageProducts,
    };
};

export default useLocalStorage;
