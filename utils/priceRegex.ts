export const priceRegex = (crudePrice) => {
    const priceCondition1 =
        typeof crudePrice === "string" && crudePrice.includes("$");
    const priceCondition2 = typeof crudePrice === "number";

    const price$ = priceCondition1
        ? crudePrice.match("\\$[1-9][0-9]*(\\.[0-9]{2})?|\\$0?\\.[0-9][0-9]")
        : priceCondition2
        ? 0
        : 0;

    const price = priceCondition1 ? price$[0].replace("$", 0) : 0;
    return price;
};
