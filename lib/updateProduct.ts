import { SiteClient } from 'datocms-client';

export default function updateProductAfterSales(product) {
    const { productId, wigQuantity, wigStatus } = product;
    const client = new SiteClient(
        process.env.NEXT_PUBLIC_DATOCMS_FULL_ACCESS_API_TOKEN,
    );
    client.items
        .update(productId, {
            productQuantity: wigQuantity,
            wigStatus,
        })
        .then((item) => {
            console.log('item', item);
        })
        .catch((error) => {
            console.error('error', error);
        });
}
