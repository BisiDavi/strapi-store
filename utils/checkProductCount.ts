import { toast } from 'react-toastify';

export default function checkProductCount(product, setDisableBtn) {
    //let disableButton = false;
    if (product?.count < product?.productQuantity) {
        //disableButton = true;
        setDisableBtn(false);
    } else {
        //disableButton = false;
        setDisableBtn(true);
    }
}
