import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useCurrency } from '../../hooks';
import { RushOrderAction } from '../../store/actions/RushOrderAction';

const SelectRushOrder = ({ content }) => {
    const { priceExchange, symbol } = useCurrency();
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState('');
    const { title, options } = content;

    const optionHandler = (e) => {
        setSelectedOption(e.target.value);
    };
    const rushOrder = () => {
        selectedOption.includes('55') && dispatch(RushOrderAction(55));

        selectedOption.includes('Choose Rush Order') &&
            dispatch(RushOrderAction(false));
    };

    console.log('selectedOption', selectedOption);

    useEffect(() => {
        rushOrder();
        return () => {
            rushOrder();
        };
    }, [selectedOption]);
    return (
        <Form>
            <Form.Group controlId='exampleForm.SelectCustom'>
                <Form.Label>{title}</Form.Label>
                <Form.Control onChange={optionHandler} as='select' custom>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
                {selectedOption.includes('$55.00') && (
                    <div className='rush-hour'>
                        <p>
                            Selection will add{' '}
                            <span>
                                {symbol}
                                {priceExchange(55)}
                            </span>{' '}
                            to the price
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

export default SelectRushOrder;
