const useLocalStorage = () => {
    const SetCartStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const checkStorage = () => {
        const cartStorage =
            localStorage.getItem('cart') === null && SetCartStorage([]);

        return cartStorage;
    };

    const GetLocalStorageProducts = () => {
        checkStorage();
        if (localStorage.getItem('cart') !== null) {
            const productFromStorage = localStorage.getItem('cart');
            const checkStorage = JSON.parse(productFromStorage);
            return checkStorage;
        }
    };

    const clearLocalStorage = () =>
        localStorage.setItem('cart', JSON.stringify([]));

    return {
        SetCartStorage,
        GetLocalStorageProducts,
        clearLocalStorage,
    };
};

export default useLocalStorage;
