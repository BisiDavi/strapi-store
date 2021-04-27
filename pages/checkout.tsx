import React from "react";
import { ShippingAddress } from "../components/Checkout";
import { Pagelayout } from "../container";

const Checkout = () => {
    return (
        <Pagelayout title="Checkout |">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 info">
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
                    <ShippingAddress />
                </div>
                <style jsx>
                    {`
                        .container-fluid {
                            padding: 0px 100px;
                        }
                        .info {
                            text-align: center;
                            margin: 20px auto;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
};

export default Checkout;
