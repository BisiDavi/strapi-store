import React from "react";
import { Form } from "react-bootstrap";
import { priceRegex } from "../../utils";

const SelectWigs = ({ wigs, selectHandler }) => {
    return (
        <Form.Group onClick={selectHandler} controlId={wigs.name}>
            <Form.Label>{wigs.name} :</Form.Label>
            <Form.Control name={wigs.id} as="select" custom>
                {wigs.content.map((wigOption, index) => (
                    <option
                        data-price={priceRegex(wigOption)}
                        key={index}
                        value={wigOption}
                    >
                        {wigOption}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default SelectWigs;