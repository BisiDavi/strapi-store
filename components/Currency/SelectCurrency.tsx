import { Form } from 'react-bootstrap';
import { useCurrency, useRedux } from '@hooks/.';
import { CurrencyAction } from '@store/actions/currencyAction';
import styles from '@styles/SelectCurrency.module.css';

export default function SelectCurrencyDropdown(): JSX.Element {
    const { dispatch } = useRedux();
    const { currencyRate, currency } = useCurrency();

    function selectHandler(e) {
        return e.target.value === 'Dollar'
            ? dispatch(CurrencyAction(currencyRate.dollar))
            : dispatch(CurrencyAction(currencyRate.naira));
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
