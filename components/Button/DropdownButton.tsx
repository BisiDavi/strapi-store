import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButtonProps } from '../../types';

export default function DropdownButton({
    content,
}: DropdownButtonProps): JSX.Element {
    const { title, items } = content;
    return (
        <Dropdown>
            <Dropdown.Toggle id='dropdown-basic'>{title}</Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item, index) => (
                    <Dropdown.Item key={index} href='#/action-1'>
                        {item}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
