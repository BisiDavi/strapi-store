import { useState, ChangeEvent, useEffect } from 'react';
import { signIn } from 'next-auth/client';
import { toast } from 'react-toastify';
import { useLocalStorage, useLoading } from '@hooks/.';
import Loading from '@components/loader/Loading';

export default function EmailSignin() {
    const [userEmail, setUserEmail] = useState('');
    const { setStorage } = useLocalStorage();
    const { loading, startLoading, stopLoading } = useLoading();

    useEffect(() => {
        const condition = userEmail.length !== 0;

        condition && setStorage('email', userEmail);
    }, [setStorage, userEmail]);

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        return setUserEmail(e.target.value);
    }
    function submitHandler(e): void {
        e.preventDefault();
        startLoading();
        return signIn('email', { email: userEmail })
            .then(function (response) {
                console.log('response', response);
                stopLoading();
                return toast.success(
                    'Please verify the link sent to your email address',
                );
            })
            .catch(function (error) {
                console.log('error', error);
                stopLoading();
                return toast.error(
                    'An error occured please try again, Thanks. ',
                );
            });
    }

    return (
        <>
            {loading && <Loading />}
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
                            background-color: #ffa6ca;
                            padding: 5px 10px;
                            font-size: 20px;
                            border: none;
                        }
                        form input {
                            height: 40px;
                            width: 100%;
                            margin: 20px 0px;
                            border-radius: 20px;
                            border: 2px solid #ffa6ca;
                            text-align: center;
                        }
                        form input::placeholder {
                            text-align: center;
                            font-family: 'Roboto', sans-serif;
                        }
                    `}
                </style>
            </div>
        </>
    );
}
