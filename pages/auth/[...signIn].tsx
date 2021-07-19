import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
    getProviders,
    signIn as AuthSignIn,
    useSession,
} from 'next-auth/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Pagelayout } from '@containers/.';
import { Loading } from '@components/.';
import EmailSignin from '@components/Form/EmailSignin';
import useLocalStorage from '@hooks/useLocalStorage';
import DisplayError from '@utils/checkAuthError';

export default function Signin({ providers }) {
    const router = useRouter();
    const { setStorage } = useLocalStorage();
    const [apiResponse, setApiResponse] = useState(null);
    const [session, loading] = useSession();
    const { signIn, error } = router.query;

    function authText() {
        if (signIn.includes('login')) {
            return 'log in';
        } else if (signIn.includes('create-account')) {
            return 'create account';
        } else if (signIn.includes('signin')) {
            return 'sign in';
        }
    }

    const signInText = authText();

    useEffect(() => {
        if (apiResponse !== null) {
            setStorage('apiResponse', apiResponse);
        }
    }, [apiResponse, setStorage]);

    const displayIcon = (icon) => {
        switch (icon) {
            case 'Google':
                return '/google.svg';
            case 'Facebook':
                return '/facebook.svg';
            case 'Instagram':
                return '/instagram.svg';
            default:
                return null;
        }
    };

    return (
        <>
            {loading && <Loading />}
            <Pagelayout title='Sign in'>
                <div className='container-fluid sign-in'>
                    {error && <DisplayError signinError={error} />}
                    {!session ? (
                        <div className='row'>
                            <h3 className='text-center my-2'>
                                Hello Dear Customer, Please {signInText}, we
                                want to know you.
                            </h3>

                            <h3 className='text-center my-2'>
                                In case you have issues with google, facebook or
                                instagram, {signInText} with with your email
                            </h3>

                            <div className='signinButtons'>
                                <div className='providerSignin'>
                                    {Object.values(providers).map(
                                        (provider: any) => {
                                            console.log(
                                                'providers',
                                                provider.name,
                                            );
                                            if (provider.name === 'Email') {
                                                return (
                                                    <EmailSignin
                                                        key={provider.name}
                                                    />
                                                );
                                            }
                                            return (
                                                <button
                                                    onClick={() =>
                                                        AuthSignIn(provider.id)
                                                            .then(
                                                                (response) => {
                                                                    console.log(
                                                                        'response auth',
                                                                        response,
                                                                    );
                                                                    setApiResponse(
                                                                        response,
                                                                    );
                                                                },
                                                            )
                                                            .catch((error) =>
                                                                console.error(
                                                                    'error',
                                                                    error,
                                                                ),
                                                            )
                                                    }
                                                    key={provider.name}
                                                >
                                                    <Image
                                                        src={displayIcon(
                                                            provider.name,
                                                        )}
                                                        alt={provider.name}
                                                        width='25'
                                                        height='25'
                                                    />
                                                    <span>
                                                        {' '}
                                                        {signInText} with{' '}
                                                        <span className='mx-1'>
                                                            {provider.name}
                                                        </span>
                                                    </span>
                                                </button>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='row'>
                            <h3 className='text-center'>
                                Welcome {session.user.name}, to Jenjen&#39;s
                                Luxury Wigs. continue{' '}
                                <Link href='/collection/all'>
                                    <a>shopping</a>
                                </Link>
                            </h3>
                        </div>
                    )}
                    <style jsx>
                        {`
                            .container-fluid.sign-in .row {
                                display: flex;
                                flex-direction: column;
                                margin: 50px auto;
                                justify-content: center;
                                text-align: center;
                                align-items: center;
                                font-family: 'Montserrat', sans-serif;
                            }
                            h3.text-center a {
                                color: #ffa6ca;
                                font-weight: bold;
                            }
                            .providerSignin {
                                display: flex;
                                flex-direction: column;
                            }

                            button {
                                margin: 10px 0px;
                                height: 50px;
                                border: none;
                                font-weight: bold;
                                width: 250px;
                                display: flex;
                                color: white;
                                background-color: #ffa6ca;
                                align-items: center;
                                padding: 10px 15px;
                                justify-content: space-around;
                            }

                            button:hover {
                                opacity: 0.5;
                            }

                            button img {
                                margin: 0px 5px;
                            }

                            form input,
                            form button {
                                height: 50px;
                                width: 250px;
                            }

                            form input {
                                margin: 15px 0px;
                            }
                            form input::placeholder {
                                text-align: center;
                            }
                            form {
                                display: flex;
                                flex-direction: column;
                            }

                            @media (max-width: 768px) {
                                .sign-in h3 {
                                    font-size: 18px;
                                }
                                button {
                                    font-size: 14px;
                                }
                            }
                        `}
                    </style>
                </div>
            </Pagelayout>
        </>
    );
}

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}
