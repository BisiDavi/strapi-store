import { useEffect } from 'react';
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
import styles from '@styles/auth.module.css';

export default function Signin({ providers }) {
    const router = useRouter();
    const [session, loading] = useSession();
    const { signIn } = router.query;

    const signInText = signIn[0].includes('-') && signIn[0].replace('-', ' ');
    console.log('signIn', signIn);
    console.log('signInText', signInText);

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
    loading && <Loading />;
    return (
        <Pagelayout title='Sign in' className={styles.authPage}>
            <div className='container-fluid sign-in'>
                {!session ? (
                    <div className='row'>
                        <h3 className='text-center'>
                            Hello Dear Customer, Please {signInText}, we want to
                            know you.
                        </h3>

                        <div className='signinButtons'>
                            <div className='providerSignin'>
                                {Object.values(providers).map(
                                    (provider: any) => {
                                        console.log('providers', provider.name);
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
                            Welcome {session.user.name}, to Jenjen&#39;s Luxury
                            Wigs. continue{' '}
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
