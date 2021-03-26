import React, { FC } from "react";
import { Pagelayout } from "../../container";
import policy from "../../json/deliveryPolicy.json";

export const displayList = (deliveryArr) => (
    <ul>
        {deliveryArr.map((link) => (
            <li>{link}</li>
        ))}
    </ul>
);

const DeliveryPolicy:FC = () => {
    return (
        <Pagelayout title="Delivery Policy">
            <h1>Delivery</h1>
            <div className="content">
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
        </Pagelayout>
    );
};

export default DeliveryPolicy;
