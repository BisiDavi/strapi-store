import React from "react";
import { Form } from "react-bootstrap";

const Select = ({ content }) => {
    const { title, options } = content;
    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>{title}</Form.Label>
                <Form.Control as="select" custom>
                    {options.map((option) => (
                        <option value={option}>{option}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default Select;
