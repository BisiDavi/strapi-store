import React from "react";
import { useRouter } from "next/router";
import { Pagelayout } from "../../container";

const Signin = () => {
    const router = useRouter();
    const { signIn } = router.query;
    console.log("signIn", signIn);

    const providers = [
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
                        <form>
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                            />
                            <button>{signIn} with Email</button>
                        </form>
                        or
                        <div className="providerSignin">
                            {providers.map((provider, index) => (
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
                            ))}
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
