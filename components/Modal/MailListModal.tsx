import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { axiosInstance } from '@axios/axiosInstance';
import { PageModal } from '.';
import useLoading from '@hooks/useLoading';
import Loading from '@components/loader/Loading';
import styles from '@styles/Mailform.module.css';

interface MailingListProps {
    show: boolean;
    onHide: () => void;
}

export default function MailList({ show, onHide }: MailingListProps) {
    const [userEmail, setEmail] = useState('');
    const { startLoading, stopLoading, loading } = useLoading();

    function onChangeHandler(e) {
        setEmail(e.target.value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        startLoading();
        axiosInstance
            .post('/mailing-list', JSON.stringify({ email: userEmail }))
            .then((response) => {
                onHide();
                console.log('response newsletter', response.data);
                stopLoading();
                toast.success('Thanks for subscribing to my newsletter');
                setEmail('');
            })
            .catch((error) => {
                console.error('error', error);
                stopLoading();
                toast.error('an error just occurred, please try again');
            });
    }
    return (
        <>
            {loading && <Loading />}
            <PageModal
                header='JOIN OUR MAILING LIST!'
                modalstyle={styles.pageModal}
                show={show}
                onHide={onHide}
            >
                <div className='mailingList'>
                    <p className='text'>
                        Be among the first to hear about our discount sales, new
                        arrivals & more!
                    </p>
                    <form onSubmit={onSubmitHandler} className='mailForm'>
                        <input
                            value={userEmail}
                            placeholder='Email'
                            onChange={onChangeHandler}
                            type='email'
                            required
                        />
                        <button type='submit'>Subscribe</button>
                        <p className='notice'>
                            *By completing this form you are signing up to
                            receive our emails and can unsubscribe at any time
                        </p>
                    </form>
                </div>
                <style jsx>{`
                    .mailingList {
                        font-family: Anton, Helvetica, Arial, 'Sans Serif',
                            serif;
                    }
                    form.mailForm {
                        margin: auto;
                        width: 80%;
                        display: grid;
                        grid-template-rows: 1fr 1fr;
                    }
                    form.mailForm p {
                        color: rgb(92, 92, 92);
                        font-size: 12px;
                        margin: 20px 0px;
                    }
                    form input::placeholder {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 18px;
                        padding: 0px 15px;
                    }

                    .mailForm input {
                        height: 50px;
                    }
                    form.mailForm button {
                        color: rgb(255, 255, 255);
                        font-size: 20px;
                        text-align: center;
                        letter-spacing: 0px;
                        background-color: rgb(255, 166, 202);
                        border: 0px;
                        margin: 3px auto;
                        border-radius: 2px;
                        border-radius: 0px;
                        font-size: 24px;
                        font-weight: 1000;
                        height: 50px;
                        width: 100%;
                        padding: 0px;
                    }
                    .text {
                        color: rgb(92, 92, 92);
                        margin: 0px auto 10px auto;
                        width: 80%;
                        font-size: 24px;
                        color: rgb(92, 92, 92);
                        font-family: Anton, Helvetica, Arial, 'Sans Serif',
                            serif;
                        text-align: center;
                    }
                    .mailinglist p {
                        text-align: center;
                        color: rgb(92, 92, 92);
                    }
                    @media (max-width: 768px) {
                        .notice {
                            font-size: 11px;
                        }
                        p.text {
                            font-size: 16px;
                        }
                        form.mailForm input,
                        form.mailForm button {
                            height: 45px;
                            border: 0px;
                        }
                        form.mailForm input::placeholder {
                            margin: 0px 15x;
                        }
                    }
                `}</style>
            </PageModal>
        </>
    );
}
