import React from "react";
import { Dropdown, Form } from "react-bootstrap";
import { FiDollarSign } from "react-icons/fi";
import { DropdownButton } from "../Button";
import Naira from "../Icons/Naira";

const SelectCurrency = (): JSX.Element => {
    const dropdownValues = [
        { name: "Dollar", value: 1 },
        { name: "Naira", value: 460 },
    ];
    const symbol = (currency) =>
        currency.name === "Dollar" ? <FiDollarSign /> : <Naira />;
    return (
        <Form>
            <Form.Group controlId="currency.SelectCustom">
                <Form.Label>Currency</Form.Label>
                <Form.Control as="select" custom>
                    {dropdownValues.map((dropdown) => (
                        <option value={dropdown}>
                            {dropdown.name} ({symbol(dropdown)})
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default SelectCurrency;
