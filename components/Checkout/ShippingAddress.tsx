import React, { FC, useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

const ShippingAddress: FC = (): JSX.Element => {
    const [session, loading] = useSession();
    console.log('session', session);
    let fullName, email;

    useEffect(() => {
        formState.fullName = !loading && session ? session.user.name : '';
        formState.email = !loading && session ? session.user.email : '';
    }, [session]);

    console.log('fullName', fullName);
    console.log('email', email);

    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        telephone: '',
        address: '',
        zip: '',
        city: '',
        state: '',
        country: '',
    });
    const formArr = [
        { name: 'fullName', placeHolder: 'Name*' },
        { name: 'email', placeHolder: 'Email*' },
        { name: 'telephone', placeHolder: 'Telephone*' },
        { name: 'city', placeHolder: 'City*' },
        { name: 'address', placeHolder: 'Address*' },
        { name: 'zip', placeHolder: 'Zip/Postal Code*' },
        { name: 'state', placeHolder: 'State*' },
        { name: 'country', placeHolder: 'Country*' },
    ];
    const inputHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    console.log('formState', formState);

    return (
        <div className='shippingAddress'>
            <div className='title'>
                <span>1</span>SHIPPING ADDRESS
            </div>
            <div className='addressForm'>
                {formArr.map((formInput, index) => (
                    <input
                        key={index}
                        className={`input-${index}`}
                        name={formInput.name}
                        value={formState[formInput.name]}
                        onChange={inputHandler}
                        placeholder={formInput.placeHolder}
                        required
                    />
                ))}
            </div>
            <style jsx>
                {`
                    .title {
                        display: flex;
                        align-items: center;
                        margin: 0px 10px 10px 0px;
                    }

                    .title span {
                        color: white;
                        width: 20px;
                        height: 20px;
                        font-size: 14px;
                        text-align: center;
                        line-height: 20px;
                        background-color: #999;
                        color: #fff;
                        border-radius: 2px;
                        text-transform: uppercase;
                        margin-right: 10px;
                    }
                    input.input-4 {
                        grid-column: 1/3;
                        grid-row: 3;
                    }

                    .addressForm input {
                        border: 2px dotted black;
                        border-radius: 10px;
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
                        margin: 30px 0px;
                        width: 450px;
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
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: unset;
                        }

                        input.input-0 {
                            grid-column: 1/3;
                        }
                        input.input-1 {
                            grid-column: 1/3;
                        }
                        input.input-2 {
                            grid-column: 1/2;
                        }
                        input.input-3 {
                            grid-column: 2/3;
                        }
                        input.input-4 {
                            grid-column: 1/3;
                            grid-row: 3;
                        }
                        input.input-7 {
                            grid-column: 1/3;
                        }
                        input {
                            height: 40px;
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ShippingAddress;
