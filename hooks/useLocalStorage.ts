const useLocalStorage = () => {
    const SetCartStorage = (cart) =>
        localStorage.setItem("cart", JSON.stringify(cart));

    const GetLocalStorageProducts = () => {
        if (localStorage.getItem("cart") !== null) {
            const productFromStorage = localStorage.getItem("cart");
            const checkStorage = JSON.parse(productFromStorage);
            console.log('checkStorage',checkStorage)
            return checkStorage;
        }
    };

    return {
        SetCartStorage,
        GetLocalStorageProducts,
    };
};

export default useLocalStorage;
