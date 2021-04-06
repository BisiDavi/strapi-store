export function SetCartStorage(cart) {
    console.log("set_cart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function GetLocalStorageProducts() {
    const productFromStorage = localStorage.getItem("cart");
    return productFromStorage;
}
