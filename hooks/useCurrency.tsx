import { useSelector } from 'react-redux';

export default function useCurrency() {
    const currency = useSelector((state) => state.currency);

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function priceExchange(price) {
        let newPrice = currency.value * price;
        return formatPrice(newPrice);
    }

    function formatToNumber(price): number {
        const priceString = price !== null ? price.replace(/\,/g, '') : 0;
        const priceNumber = parseInt(priceString, 10);
        return price !== null ? priceNumber : 0;
    }

    const symbol = currency.name === 'Dollar' ? '$' : <span>&#8358;</span>;

    return {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
    };
}
