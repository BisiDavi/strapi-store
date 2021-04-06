export const getTotalAmount = (products) => {
    let totalAmount = 0;
    products.map((product) => (totalAmount += product.amount));
    return totalAmount;
};
