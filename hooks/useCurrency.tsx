import React from 'react';
import { useSelector } from 'react-redux';

const useCurrency = () => {
    const currency = useSelector((state) => state.currency);

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const priceExchange = (price) => {
        let newPrice = currency.value * price;
        return formatPrice(newPrice);
    };

    const formatToNumber = (price): number => {
        const priceString = price !== null ? price.replace(/\,/g, '') : 0;
        const priceNumber = parseInt(priceString, 10);
        return price !== null ? priceNumber : 0;
    };

    const symbol = currency.name === 'Dollar' ? '$' : <span>&#8358;</span>;

    return {
        priceExchange,
        symbol,
        formatPrice,
        formatToNumber,
    };
};

export default useCurrency;
