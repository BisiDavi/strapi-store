export default function getProductsData(products) {
    const productData = {};
    function getAvailableWig(product) {
        const availableWig =
            Number(product.productQuantity) - Number(product.count);

        const wigStatus = availableWig === 0 ? 'sold' : 'available';
        return { wigStatus, availableWig };
    }
    products.map((product, index) => {
        const { wigStatus, availableWig } = getAvailableWig(product);

        productData[`product-${index}`] = {
            productId: product.id,
            wigStatus,
            wigQuantity: availableWig,
        };
    });

    return productData;
}
