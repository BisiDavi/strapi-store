export default function PersistCart(cart) {
    console.log("cart", cart);
    localStorage.setItem("cart", cart);
}