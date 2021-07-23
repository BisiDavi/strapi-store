import { useRedux } from '@hooks/.';

export default function useCurrency() {
    const { SelectState } = useRedux();
    const currency = SelectState('currency');

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

    const currencyRate = {
        name: currency.name,
        value: currency.value,
    };

    const currencySymbol = symbol !== '$' ? '\u20A6' : '$';

    return {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
        currencyRate,
        currency,
        currencySymbol,
    };
}
