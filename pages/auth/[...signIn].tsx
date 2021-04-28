import React from "react";
import {
    providers,
    signIn as AuthSignIn,
    getSession,
    csrfToken,
} from "next-auth/client";
import { useRouter } from "next/router";
import { Pagelayout } from "../../container";

const Signin = ({ providers, csrfToken }) => {
    const router = useRouter();
    const { signIn } = router.query;
    console.log("signIn", signIn);

    const authProviders = [
        { icon: "/google.svg", name: "Google" },
        { icon: "/facebook.svg", name: "Facebook" },
        { icon: "/instagram.svg", name: "Instagram" },
    ];
    return (
        <Pagelayout title="Sign in ">
            <div className="container-fluid sign-in">
                <div className="row">
                    <h3 className="text-center">
                        Hello Dear Customer, Please {signIn}, we want to know
                        you.
                    </h3>
                    <div className="signinButtons">
                        <form method="post" action="/api/auth/signin/email">
                            <input
                                name="csrfToken"
                                type="hidden"
                                defaultValue={csrfToken}
                            />
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                            />
                            <button type="submit">{signIn} with Email</button>
                        </form>
                        or
                        <div className="providerSignin">
                            {/* {authProviders.map((provider, index) => (
                                <button key={index}>
                                    <img
                                        src={provider.icon}
                                        width="25"
                                        height="25"
                                    />
                                    <span>
                                        {" "}
                                        {signIn} with{" "}
                                        <span className="mx-1">
                                            {provider.name}
                                        </span>
                                    </span>
                                </button>
                            ))} */}
                            {Object.values(providers).map((provider: any) => {
                                if (provider.name === "Email") {
                                    return;
                                }
                                return (
                                    <button
                                        onClick={() => AuthSignIn(provider.id)}
                                        key={provider.name}
                                    >
                                        <img
                                            src={provider.icon}
                                            width="25"
                                            height="25"
                                        />
                                        <span>
                                            {" "}
                                            {signIn} with{" "}
                                            <span className="mx-1">
                                                {provider.name}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
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
                    `}
                </style>
            </div>
        </Pagelayout>
    );
};

export default Signin;

Signin.getInitialProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
        csrfToken: await csrfToken(context),
    };
};
