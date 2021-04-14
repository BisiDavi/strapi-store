const useLocalStorage = () => {
    const SetCartStorage = (cart) => {
        if (localStorage.getItem("cart") === null) {
            return localStorage.setItem("cart", JSON.stringify(cart));
        }
    };

    const GetLocalStorageProducts = () => {
        const productFromStorage = localStorage.getItem("cart");
        const checkStorage =
            productFromStorage !== null && JSON.parse(productFromStorage);
        return checkStorage;
    };

    return {
        SetCartStorage,
        GetLocalStorageProducts,
    };
};

export default useLocalStorage;
