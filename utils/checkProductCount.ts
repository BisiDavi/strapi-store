export default function checkProductCount(product, setDisableBtn) {
    if (product?.count < product?.productQuantity) {
        setDisableBtn(false);
    } else {
        setDisableBtn(true);
    }
}
