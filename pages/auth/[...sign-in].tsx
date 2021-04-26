import React from "react";
import { Pagelayout } from "../../container";

const Signin = () => {
    // const { params } = req.query;
    return (
        <Pagelayout title="Sign in ">
            <div className="container-fluid sign-in">
                <div className="row">
                    <h3 className="text-center">
                        Hello Dear Customer, Please sign in, we want to know
                        you.
                    </h3>
                    <div className="signinButtons">
                        <form>
                            <input
                                type="email"
                                placeholder="email@example.com"
                            />
                            <button>Sign in with Email</button>
                        </form>
                        or
                        <div className="providerSignin">
                            <button>
                                <i className="fa fa-google"></i>Sign in with
                                Google
                            </button>
                            <button>
                                <i className="fa fa-facebook"></i>Sign in with
                                Facebook
                            </button>
                            <button>
                                <i className="fa fa-instagram"></i>Sign in with
                                Instagram
                            </button>
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
                            width: 250px;
                        }

                        .providerSignin button:first-child {
                            color: #4285f4;
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
