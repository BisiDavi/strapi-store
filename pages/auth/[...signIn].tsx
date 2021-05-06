import React, { useEffect } from 'react';
import {
    getProviders,
    signIn as AuthSignIn,
    useSession,
} from 'next-auth/client';
import { useRouter } from 'next/router';
import { Pagelayout } from '../../container';
import Link from 'next/link';
import { Loading } from '../../components';

const Signin = ({ providers }) => {
    const router = useRouter();
    const [session, loading] = useSession();
    const { signIn } = router.query;

    useEffect(() => {
        session && router.back();
    }, [session]);

    console.log('session', session);

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
        <Pagelayout title='Sign in '>
            <div className='container-fluid sign-in'>
                {!session ? (
                    <div className='row'>
                        <h3 className='text-center'>
                            Hello Dear Customer, Please {signIn}, we want to
                            know you.
                        </h3>

                        <div className='signinButtons'>
                            <div className='providerSignin'>
                                {Object.values(providers).map(
                                    (provider: any) => {
                                        if (provider.name === 'Email') {
                                            return;
                                        }
                                        return (
                                            <button
                                                onClick={() =>
                                                    AuthSignIn(provider.id)
                                                }
                                                key={provider.name}
                                            >
                                                <img
                                                    src={displayIcon(
                                                        provider.name,
                                                    )}
                                                    width='25'
                                                    height='25'
                                                />
                                                <span>
                                                    {' '}
                                                    {signIn} with{' '}
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
                            Welcome {session.user.name}, to Jenjen's Luxury
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
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
};

export default Signin;

export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}
