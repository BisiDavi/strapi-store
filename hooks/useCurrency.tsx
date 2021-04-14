import React from "react";
import { useSelector } from "react-redux";

const useCurrency = () => {
    const currency = useSelector((state) => state.currency);

    const priceExchange = (price) => currency.value * price;
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
