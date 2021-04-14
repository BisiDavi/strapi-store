import React from "react";
import { useSelector } from "react-redux";

const useCurrency = () => {
    const currency = useSelector((state) => state.currency);

    const priceExchange = (price) => {
        let newPrice = currency.value * price;
        return newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const symbol =
        currency.name === "Dollar" ? (
            "$"
        ) : (
            <img height="30px" width="30px" src="/naira.svg" />
        );
    return {
        priceExchange,
        symbol,
    };
};

export default useCurrency;

// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
