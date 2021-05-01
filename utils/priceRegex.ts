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

const PriceArr = (formContent) => {
    let pArr = [];
    const formValues = Object.values(formContent);
    formValues.map((item) => {
        const price$ =
            typeof item === "string" && item.includes("$")
                ? item
                      .match(
                          "\\$[1-9][0-9]*(\\.[0-9]{2})?|\\$0?\\.[0-9][0-9]"
                      )[0]
                      .replace("$", "0")
                : 0;
        console.log(price$, "price");
        pArr.push(Number(price$));
    });
    return pArr;
};

const add = (a, b) => a + b;

export const sumTotal = (arr) => {
    const totalPrice = PriceArr(arr).reduce(add, 0);
    return totalPrice;
};
