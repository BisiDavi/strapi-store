import React from "react";
import { useSelector } from "react-redux";

const useCurrency = () => {
    const currency = useSelector((state) => state.currency);

    const priceExchange = (price) => {
        let newPrice = currency.value * price;
        return newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const symbol = currency.name === "Dollar" ? "$" : <span>&#8358;</span>;
    return {
        priceExchange,
        symbol,
    };
};

export default useCurrency;
