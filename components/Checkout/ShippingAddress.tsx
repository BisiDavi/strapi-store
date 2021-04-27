import React, { useState } from "react";

const ShippingAddress = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        address: "",
        zip: "",
        city: "",
        country: "",
        state: "",
    });
    const formArr = [
        { name: "firstName", placeHolder: "First Name*" },
        { name: "lastName", placeHolder: "Last Name*" },
        { name: "email", placeHolder: "Email*" },
        { name: "telephone", placeHolder: "Telephone*" },
        { name: "address", placeHolder: "Address*" },
        { name: "zip", placeHolder: "Zip/Postal Code*" },
        { name: "city", placeHolder: "City*" },
        { name: "country", placeHolder: "Country*" },
        { name: "state", placeHolder: "State*" },
    ];
    return (
        <div className="shippingAddress">
            <div className="title">
                <span>1</span>SHIPPING ADDRESS
            </div>
            <div className="addressForm">
                {formArr.map((formInput, index) => (
                    <input
                        className={`input-${index}`}
                        name={formInput.name}
                        placeholder={formInput.placeHolder}
                        required
                    />
                ))}
            </div>
            <style jsx>
                {`
                    .title {
                        display: flex;
                        align-items: center;
                        margin: 0px 10px 10px 0px;
                    }

                    .title span {
                        color: white;
                        width: 20px;
                        height: 20px;
                        font-size: 14px;
                        text-align: center;
                        line-height: 20px;
                        background-color: #999;
                        color: #fff;
                        border-radius: 2px;
                        text-transform: uppercase;
                        margin-right: 10px;
                    }
                    input.input-4 {
                        grid-column: 1/3;
                        grid-row: 3;
                    }

                    .addressForm input {
                        border: 2px dotted black;
                        border-radius: 10px;
                        text-align: center;
                    }

                    .addressForm {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: repeat(5, 45px);
                        grid-gap: 10px;
                    }

                    .shippingAddress {
                        width: 100%;
                        border: 1px solid black;
                        padding: 20px;
                        margin: 30px 0px;
                        width: 450px;
                    }
                `}
            </style>
        </div>
    );
};

export default ShippingAddress;
