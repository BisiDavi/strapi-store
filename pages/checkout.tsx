import React from "react";
import { Pagelayout } from "../container";

const Checkout = () => {
    return (
        <Pagelayout title="Checkout |">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 bg-white">
                        <h3>Jenjen's Luxury Wigs</h3>
                        <div className="bread-crumb">
                            <p>Information &gt; Shipping &gt; Payment</p>
                        </div>
                        <div className="express-checkout">
                            <p>Express checkout</p>

                            <button className="paypal-checkout">
                                <img
                                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                                    alt="Check out with PayPal"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </Pagelayout>
    );
};

export default Checkout;
