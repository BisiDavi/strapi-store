const useLocalStorage = () => {
    const SetCartStorage = (cart) => {
        console.log("set_cart", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const GetLocalStorageProducts = () => {
        const productFromStorage = localStorage.getItem("cart");
        return productFromStorage;
    };

    return {
        SetCartStorage,
        GetLocalStorageProducts,
    };
};

export default useLocalStorage;
