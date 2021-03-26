import React, { FC } from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownButtonProps } from "../../types";

const DropdownButton: FC<DropdownButtonProps> = ({ content }): JSX.Element => {
    const { title, items } = content;
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">{title}</Dropdown.Toggle>

            <Dropdown.Menu>
                {items.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownButton;
