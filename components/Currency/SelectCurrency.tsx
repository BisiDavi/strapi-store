import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { SelectCurrency } from "../../store/actions/currencyAction";
import styles from "../../styles/SelectCurrency.module.css";

const SelectCurrencyDropdown = (): JSX.Element => {
    const dispatch = useDispatch();
    const currency = useSelector((state) => state.currency);
    const dropdownValues = {
        dollar: { name: "Dollar", value: 1 },
        naira: { name: "Naira", value: 460 },
    };
    const selectHandler = (e) => {
        return e.target.value === "Dollar"
            ? dispatch(SelectCurrency(dropdownValues.dollar))
            : dispatch(SelectCurrency(dropdownValues.naira));
    };
    return (
        <Form className={styles.selectCurrency}>
            <Form.Group controlId="currency.SelectCustom">
                <Form.Label>Select Currency</Form.Label>
                <Form.Control
                    value={currency.name}
                    onChange={selectHandler}
                    as="select"
                    custom
                >
                    <option value="Dollar">Dollar ($)</option>
                    <option value="Naira">Naira (&#8358;)</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default SelectCurrencyDropdown;
