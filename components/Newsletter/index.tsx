import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosInstance } from '@axios/axiosInstance';

const Newsletter = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('');

    function onChangeHandler(e) {
        setSubscriberEmail(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        console.log('subscriberEmail', subscriberEmail);
        axiosInstance
            .post('/newsletter', subscriberEmail)
            .then((response) => {
                console.log('response newsletter', response.data);
                toast.success('Thanks for subscribing to my newsletter');
            })
            .catch((error) => {
                console.error('error', error);
                toast.error('an erro just occurred, please try again');
            });
    }

    return (
        <div className='newsletter'>
            <div className='overlay'>
                <h5>Subscribe to our newsletter</h5>
                <p>
                    Promotions, new products and sales.Directly to your inbox.
                </p>
                <form onSubmit={onSubmitHandler}>
                    <input
                        onChange={onChangeHandler}
                        value={subscriberEmail}
                        placeholder='Email Address'
                    />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
            <style jsx>{`
                .newsletter {
                    margin: 40px auto;
                    display: flex;
                    background: url('/floralBg.webp');
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-family: Karla, sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    text-rendering: optimizeLegibility;
                    letter-spacing: 0.05em;
                    height: 300px;
                    font-size: 15px;
                    background-size: cover;
                }

                .overlay {
                    background-color: #ffffff96;
                    text-align: center;
                    padding: 50px;
                }

                .newsletter h5 {
                    color: black;
                    font-size: 1.6em;
                    font-weight: bold;
                }

                p {
                    font-weight: 500;
                    font-family: 'Open-sans', sans-serif;
                }

                .newsletter input {
                    border: none;
                    background-color: #f4f4f4;
                    padding: 15px 10px;
                    width: 270px;
                }
                .newsletter button {
                    border: none;
                    background-color: black;
                    color: white;
                    padding: 15px 10px;
                }
                .newsletter button:hover {
                    background-color: #5d5353;
                    opacity: 1;
                    color: #ffa6ca;
                }

                @media (max-width: 576px) {
                    .newsletter {
                        background: url('/floralBg.webp');
                        background-size: cover;
                        position: relative;
                        height: 200px;
                        width: 100%;
                        z-index: 1;
                    }
                    .overlay {
                        position: absolute;
                        top: 0px;
                        z-index: 1000;
                        background: rgba(225, 225, 225, 0.5);
                        width: 90%;
                        margin: 19px auto;
                        padding: 20px;
                    }

                    .newsletter h5 {
                        font-size: 17px;
                        font-weight: 1000;
                        text-align: center;
                        color: black;
                        font-style: italic;
                        font-family: initial;
                    }

                    .newsletter p {
                        font-size: 12px;
                        text-align: center;
                        font-style: italic;
                        font-family: inherit;
                    }

                    .newsletter form input {
                        width: 65%;
                        padding: 10px;
                    }

                    .newsletter button {
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Newsletter;
