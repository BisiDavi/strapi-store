import { useUserDetails, useCurrency, useFormatProduct } from '@hooks/.';
import getProductsData from '@utils/getProductsData';

export default function usePaymentData() {
    const {
        details,
        method,
        products,
        totalAmount,
        additionalInformation,
    } = useUserDetails();
    const { currencySymbol } = useCurrency();
    const { formatProduct }: any = useFormatProduct();
    const productsArray = formatProduct(products);

    const shippingDays = method.includes('14 working days')
        ? '14 working days'
        : '5 working days';

    const productsData = getProductsData(productsArray);

    const adminNotificationData = {
        products: productsArray,
        email: details?.email,
        phonenumber: details?.telephone,
        shippingMethod: method,
        totalPrice: totalAmount,
        additionalInformation,
        symbol: currencySymbol,
    };
    const userNotificationData = {
        products: productsArray,
        email: details?.email,
        shippingDays,
        totalPrice: totalAmount,
        symbol: currencySymbol,
    };

    const saveOrderToDB = {
        fullName: details.fullName,
        email: details.email,
        address: details.address,
        zip: details.zip,
        telephone: details.telephone,
        country: details.country,
        region: details.region,
        shippingMethod: method,
        products,
        totalPrice: totalAmount,
        additionalInformation,
        symbol: currencySymbol,
    };

    console.log('productsArray', productsArray);

    return {
        saveOrderToDB,
        userNotificationData,
        adminNotificationData,
        productsData,
    };
}
