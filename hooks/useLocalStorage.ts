const useLocalStorage = () => {
    const SetCartStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    function setStorage(name, data) {
        return localStorage.setItem(name, JSON.stringify(data));
    }

    const checkStorage = () => {
        const cartStorage =
            localStorage.getItem('cart') === null && SetCartStorage([]);

        return cartStorage;
    };

    function getStorage(name) {
        if (
            localStorage.getItem(name) !== null ||
            localStorage.getItem(name) !== undefined
        ) {
            const getSavedData = localStorage.getItem(name);
            console.log('getSavedData', getSavedData);
            return JSON.parse(getSavedData);
        }
    }

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
        setStorage,
        getStorage,
    };
};

export default useLocalStorage;
