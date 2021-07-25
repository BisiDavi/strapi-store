import useCurrency from '@hooks/useCurrency';

export default function useFormatProduct() {
    const { priceExchange } = useCurrency();

    function formatProduct(products: any[]): any[] {
        let productArray = [];
        products.map(
            (product) =>
                (productArray = [
                    ...productArray,
                    {
                        id: product.id,
                        amount: priceExchange(product.amount),
                        count: product.count,
                        image: product.image.responsiveImage.src,
                        title: product.title,
                        productQuantity: product.productQuantity,
                    },
                ]),
        );

        return productArray;
    }

    return { formatProduct };
}
