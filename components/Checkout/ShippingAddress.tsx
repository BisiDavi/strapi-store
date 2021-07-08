import React, { FC, useState, useEffect } from 'react';
import CountryDropdownbutton from '@components/Form/CountryDropdown';
import styles from '@styles/checkout.module.css';
import { UserDetailsAction } from '@store/actions/UserDetailsAction';
import { useRedux } from '@hooks/.';

const ShippingAddress: FC = (): JSX.Element => {
    const { dispatch } = useRedux();

    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        address: '',
        zip: '',
        telephone: '',
    });

    const formStateLength = Object.values(formState).filter((f) => f !== '')
        .length;

    useEffect(() => {
        if (formStateLength === 5) {
            dispatch(UserDetailsAction(formState));
        }
    }, [formState]);

    const formArr = [
        { name: 'fullName', placeHolder: 'Name*' },
        { name: 'email', placeHolder: 'Email*' },
        { name: 'telephone', placeHolder: 'Telephone*' },
        { name: 'country', placeHolder: 'Country*' },
        { name: 'address', placeHolder: 'Address*' },
        { name: 'zip', placeHolder: 'Zip/Postal Code*' },
    ];
    const inputHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    console.log('formState', formState);

    return (
        <div className={`${styles.form} shippingAddress`}>
            <div className={styles.title}>
                <span>1</span>SHIPPING ADDRESS
            </div>
            <div className='addressForm'>
                {formArr.map((formInput, index) => {
                    return formInput.name === 'country' ? (
                        <CountryDropdownbutton key={index} />
                    ) : (
                        <input
                            key={index}
                            className={`input-${index}`}
                            name={formInput.name}
                            value={formState[formInput.name]}
                            onChange={inputHandler}
                            placeholder={formInput.placeHolder}
                            required
                        />
                    );
                })}
            </div>
            <style jsx>
                {`
                    input.input-4 {
                        grid-column: 1/3;
                        grid-row: 3;
                    }

                    .addressForm input {
                        border: 2px dotted black;
                        border-radius: 10px;
                        width: 100%;
                        text-align: center;
                    }

                    .addressForm {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: repeat(5, 45px);
                        grid-gap: 10px;
                    }

                    .addressForm input:focus {
                        width: 100%;
                        border: 2px dotted #ffa6ca;
                    }

                    .shippingAddress {
                        border: 1px solid black;
                        padding: 20px;
                        margin: 10px 0px;
                        width: 100%;
                    }
                    input:focus-visible {
                        outline: none;
                    }
                    .addressForm input {
                    }
                    @media (max-width: 768px) {
                        .shippingAddress {
                            width: 100%;
                        }
                        .addressForm {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: repeat(5, 45px);
                            grid-gap: 10px;
                        }
                    }
                    @media (max-width: 450px) {
                        .addressForm {
                            display: flex;
                            flex-direction: column;
                        }
                        input {
                            height: 40px;
                            width: 80%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ShippingAddress;
