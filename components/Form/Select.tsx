import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Select = ({ content }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const { title, options } = content;
    const optionHandler = (e) => {
        console.log("selected", selectedOption);
        setSelectedOption(e.target.value);
    };
    console.log("selected", selectedOption);

    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>{title}</Form.Label>
                <Form.Control onChange={optionHandler} as="select" custom>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
                {selectedOption.includes("$55.00") && (
                    <div className="rush-hour">
                        <p>
                            Selection will add <span>$55.00</span> to the price
                        </p>
                    </div>
                )}
                <style jsx>
                    {`
                        .rush-hour span {
                            font-weight: bold;
                            color: red;
                        }
                        .rush-hour {
                            text-align: center;
                            margin-top: 30px;
                            margin-bottom: 0px;
                            font-size: 20px;
                            border: 1px solid red;
                        }

                        .rush-hour p {
                            margin: 5px;
                        }
                    `}
                </style>
            </Form.Group>
        </Form>
    );
};

export default Select;
