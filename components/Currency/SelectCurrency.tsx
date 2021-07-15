import { useRedux } from '@hooks/.';
import { Form } from 'react-bootstrap';
import { CurrencyAction } from '../../store/actions/currencyAction';
import styles from '../../styles/SelectCurrency.module.css';

export default function SelectCurrencyDropdown(): JSX.Element {
    const { dispatch, SelectState } = useRedux();
    const currency = SelectState('currency');

    console.log('currency naira', currency.naira.value);

    const dropdownValues = {
        dollar: { name: 'Dollar', value: 1 },
        naira: { name: 'Naira', value: currency.naira.value },
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
