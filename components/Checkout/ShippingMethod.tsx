import { Form } from 'react-bootstrap';
import { ShippingMethodAction } from '@store/actions/ShippingMethodAction';
import styles from '@styles/checkout.module.css';
import { shippingMethodArray } from '../../types';
import { useCurrency, useRedux } from '@hooks/.';

export default function ShippingMethod(): JSX.Element {
    const { dispatch } = useRedux();
    const { currency } = useCurrency();
    const methodArr: shippingMethodArray = {
        others: [
            {
                name: 'localMethod',
                label: 'EXPRESS SHIPPING (US only) $15.00,',
            },
            {
                name: 'OthersMethod',
                label: 'SHIP TO MY ADDRESS (other countries) $50.00',
            },
        ],
        nigeria: [
            {
                name: 'airFreight',
                label: 'SHIP TO NIGERIA (Lagos only, 14 working days) ₦3,000',
            },
            {
                name: 'dhl',
                label: 'DHL Express (Nigeria, 5 working days) ₦18,000',
            },
        ],
    };

    function radioBtnHandler(e) {
        dispatch(ShippingMethodAction(e.target.value));
        console.log('selected', e.target.value);
    }

    function displayRadios(key) {
        return methodArr[key].map((formInput, index) => (
            <Form.Group key={index} controlId={formInput.name}>
                <Form.Check
                    className='d-flex align-items-center'
                    type='radio'
                    name='shipping'
                    onChange={radioBtnHandler}
                    value={formInput.label}
                    label={formInput.label}
                />
            </Form.Group>
        ));
    }

    function displayRadioBtn() {
        return currency.name === 'Naira'
            ? displayRadios('nigeria')
            : displayRadios('nigeria');
    }

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>2</span>
                <div className='text d-flex w-100 justify-content-between'>
                    SHIPPING METHOD
                    <p className='mb-0'>4-10 working days</p>
                </div>
            </div>
            <Form className='d-flex flex-column'>{displayRadioBtn()}</Form>
        </div>
    );
}
