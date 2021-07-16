export default function getDiscount(oldPrice, newPrice) {
    const discount =
        ((Number(oldPrice) - Number(newPrice)) / Number(oldPrice)) * 100;
    let discountPrice = Math.floor(discount * 100) / 100;
    return `${discountPrice} %`;
}
