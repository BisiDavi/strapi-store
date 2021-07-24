import { toast } from 'react-toastify';

export default function checkProductCount(product) {
    let disableButton = false;
    if (product?.count >= product?.productQuantity) {
        disableButton = true;
        toast.error(
            `We only have ${product?.productQuantity} of ${product?.title} in Stock`,
        );
    } else {
        disableButton = false;
    }
    return disableButton;
}
