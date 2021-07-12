import React from 'react';
import { Form } from 'react-bootstrap';
import styles from '@styles/customWig.module.css';

export default function WigCheckbox({ form, radioHandler }) {
    return (
        <Form.Group className={styles.checkbox} controlId={form.name}>
            <Form.Label>{form.name} :</Form.Label>
            {form.content.map((item, index) => (
                <Form.Check
                    key={index}
                    name={form.name}
                    value={item}
                    id={`${item} ${form.name}`}
                    onChange={radioHandler}
                    type='radio'
                    label={item}
                />
            ))}
        </Form.Group>
    );
}
