import React, { useState } from 'react';
import { signIn } from 'next-auth/client';

import { toast } from 'react-toastify';

export default function EmailSignin() {
    const [userEmail, setUserEmail] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        return setUserEmail(e.target.value);
    }
    function submitHandler(e): void {
        e.preventDefault();
        return signIn('email', { email: userEmail })
            .then(function () {
                return toast.success(
                    'Please verify the link sent to your email address',
                );
            })
            .catch(function (error) {
                console.log('error', error);
                return toast.error(
                    'An error occured please try again, Thanks. ',
                );
            });
    }

    return (
        <div className='emailSignin'>
            <form onSubmit={submitHandler}>
                <input
                    name='email'
                    value={userEmail}
                    onChange={handleChange}
                    placeholder='Enter your email'
                    required
                />
                <button type='submit'>Submit</button>
            </form>
            <style jsx>
                {`
                    .emailSignin form {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    form button {
                        margin: auto;
                        color: white;
                        background-color: black;
                        padding: 5px 10px;
                        font-size: 20px;
                    }
                `}
            </style>
        </div>
    );
}
