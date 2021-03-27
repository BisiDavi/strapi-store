import React, { FC } from "react";
import { Pagelayout } from "../../container";
import { v4 as uuidv4 } from "uuid";
import policy from "../../json/deliveryPolicy.json";

export const displayList = (deliveryArr) => (
    <ul>
        {deliveryArr.map((link) => (
            <li key={uuidv4()}>{link}</li>
        ))}
    </ul>
);

const DeliveryPolicy: FC = () => {
    return (
        <Pagelayout title="Delivery Policy">
            <>
                <h1 className="text-center">Our Delivery Policies</h1>
                <div className="content my-3 my-lg-5 px-lg-5 px-3">
                    <div className="standard-delivery">
                        <h1>US Standard Delivery</h1>
                        {displayList(policy.ukStandardDelivery)}
                    </div>
                    <div className="us-express-delivery">
                        <h1>US Express Delivery</h1>
                        {displayList(policy.ukExpressDelivery)}
                    </div>
                    <div className="international-delivery">
                        <h1>International Delivery</h1>
                        {displayList(policy.internationalDelivery)}
                    </div>
                    <div className="dhl-delivery">
                        <h1>International/DHL Delivery</h1>
                        {displayList(policy.dhlExpress)}
                    </div>
                    <div className="undelivered-order">
                        <h1>Undelivered Order </h1>
                        {displayList(policy.undeliveredOrder)}
                    </div>
                </div>
                <style jsx>{`
                    h1 {
                        font-weight: bold;
                    }
                    @media (max-width: 768px) {
                        h1.text-center {
                            font-size: 25px;
                        }
                        .content h1 {
                            font-size: 20px;
                        }
                    }
                `}</style>
            </>
        </Pagelayout>
    );
};

export default DeliveryPolicy;
