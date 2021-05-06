import React, { FC, useState } from 'react';
import { useSession } from 'next-auth/client';

const ShippingAddress: FC = (): JSX.Element => {
    const [session, loading] = useSession();
    console.log('session', session);

    const condition = session !== null && session !== undefined;
    const fullName = condition ? session.user.name : '';
    const email = condition && session.user.email ? session.user.email : '';

    console.log('fullName', fullName);
    console.log('email', email);

    const [formState, setFormState] = useState({
        fullName: fullName,
        email: email,
        telephone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        state: '',
    });
    const formArr = [
        { name: 'fullName', placeHolder: 'Name*' },
        { name: 'email', placeHolder: 'Email*' },
        { name: 'telephone', placeHolder: 'Telephone*' },
        { name: 'address', placeHolder: 'Address*' },
        { name: 'zip', placeHolder: 'Zip/Postal Code*' },
        { name: 'city', placeHolder: 'City*' },
        { name: 'country', placeHolder: 'Country*' },
        { name: 'state', placeHolder: 'State*' },
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

                    .addressForm input {
                        width: 100%;
                    }

                    .shippingAddress {
                        border: 1px solid black;
                        padding: 20px;
                        margin: 30px 0px;
                        width: 450px;
                    }
                    @media (max-width: 768px) {
                        .shippingAddress {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ShippingAddress;
