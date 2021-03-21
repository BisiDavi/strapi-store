import React from "react";

const AlertBanner = ({ displayHandler }) => {
    return (
        <div className="alertBanner">
            <h3>
                DUE TO <b>COVID 19</b> PLEASE BE ADVISED THERE MAY BE DELAY IN
                SHIPMENT. WE APOLOGISE FOR ANY INCONVENIENCE. FOR FURTHER
                ASSISTANCE PLEASE CALL{" "}
            </h3>
            <button className="cancel" onClick={displayHandler}>
                <i className="fas fa-times-circle"></i>
            </button>
            <style jsx>
                {`
                    .alertBanner {
                        position: relative;
                    }
                    h3 {
                        color: white;
                        font-size: 1vw;
                        text-transform: capitalize;
                        background-color: #ca3862;
                        text-align: center;
                        width: 100%;
                        margin-bottom: 0;
                        padding: 10px;
                        font-family: "raleway";
                    }
                    button {
                        outline: none;
                        border: none;
                        position: absolute;
                        right: 20px;
                        top: 15%;
                        background: none;
                        color: white;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    @media (max-width: 768px) {
                        h3 {
                            font-size: 3.5vw;
                            padding: 5px 15px;
                        }
                        button.cancel i {
                            font-size: 15px;
                        }
                        button.cancel {
                            margin-top: 5px;
                            right: 8px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default AlertBanner;