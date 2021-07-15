import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { CurrencyAction } from '../../store/actions/currencyAction';
import styles from '../../styles/SelectCurrency.module.css';

export default function SelectCurrencyDropdown(): JSX.Element {
    const dispatch = useDispatch();
    const currency = useSelector((state) => state.currency);
    const dropdownValues = {
        dollar: { name: 'Dollar', value: 1 },
        naira: { name: 'Naira', value: 490 },
    };
    function selectHandler(e) {
        return e.target.value === 'Dollar'
            ? dispatch(CurrencyAction(dropdownValues.dollar))
            : dispatch(CurrencyAction(dropdownValues.naira));
    }
    return (
        <Form className={styles.selectCurrency}>
            <Form.Group controlId='currency.SelectCustom'>
                <Form.Label>Select Currency</Form.Label>
                <Form.Control
                    value={currency.name}
                    onChange={selectHandler}
                    as='select'
                    custom
                >
                    <option value='Dollar'>Dollar ($)</option>
                    <option value='Naira'>Naira (&#8358;)</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
}
