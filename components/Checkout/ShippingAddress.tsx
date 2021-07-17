import { useState, useEffect } from 'react';
import CountryDropdownbutton from '@components/Form/CountryDropdown';
import { UserDetailsAction } from '@store/actions/UserDetailsAction';
import styles from '@styles/checkout.module.css';
import { useRedux } from '@hooks/.';

export default function ShippingAddress(): JSX.Element {
    const { dispatch, SelectState } = useRedux();
    const { details } = SelectState('userDetails');
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        address: '',
        zip: '',
        country: '',
        region: '',
        telephone: '',
    });

    const formStateLength = Object.values(formState).filter((f) => f !== '')
        .length;

    useEffect(() => {
        if (formStateLength === 7) {
            dispatch(UserDetailsAction(formState));
        }
    }, [formState, dispatch, formStateLength]);

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

    return (
        <div className={`${styles.form} shippingAddress`}>
            <div className={styles.title}>
                <span>1</span>SHIPPING ADDRESS
            </div>
            <div className='addressForm'>
                {formArr.map((formInput, index) => {
                    const inputValues =
                        details !== null
                            ? details[formInput.name]
                            : formState[formInput.name];
                    return formInput.name === 'country' ? (
                        <CountryDropdownbutton
                            formState={formState}
                            setFormState={setFormState}
														details={details}
                            key={index}
                        />
                    ) : (
                        <input
                            key={index}
                            className={`input-${index}`}
                            name={formInput.name}
                            value={inputValues}
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
}
