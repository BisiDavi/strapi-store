import React from 'react';
import { DiscountProps } from '../../types';

export default function DiscountRibbon({ discount }: DiscountProps) {
    return (
        <>
            <div className='badges'>
                <br />
                <p>
                    <span className='firstLine'></span>
                    <br />
                    <span className='secondLine'>{discount}</span>
                    <br />
                    <span className='thirdLine'>discount</span>
                    <br />
                    <span className='fourthLine'>Buy Now!</span>
                </p>
            </div>
            <style jsx>
                {`
                    .firstLine {
                        font-size: 24px;
                        font-weight: 300;
                    }
                    .secondLine {
                        font-size: 36px;
                        line-height: 36px;
                        font-weight: 600;
                        font-family: 'Montserrat', 'Lato', sans-serif;
                    }
                    .thirdLine {
                        font-size: 26px;
                        line-height: 32px;
                        font-weight: 300;
                        font-family: 'Dancing Script', 'Lato';
                    }
                    .fourthLine {
                        position: relative;
                        top: -10px;
                        font: bold normal 20px/40px 'Dancing Script', 'Lato';
                    }

                    .badges {
                        position: relative;
                        margin: 40px auto;
                        width: 220px;
                        height: 200px;
                        background: #e277a2;
                        border-radius: 100%;
                        color: #fff;
                        line-height: 25px;
                        text-align: center;
                        font-family: 'Open Sans', sans-serif;
                        -webkit-animation: 3s ease-in-out 0s normal none
                            infinite running swing;
                        -moz-animation: 3s ease-in-out 0s normal none infinite
                            running swing;
                        -o-animation: 3s ease-in-out 0s normal none infinite
                            running swing;
                        animation: 3s ease-in-out 0s normal none infinite
                            running swing;

                        -webkit-transform-origin: 100px -71px;
                        -moz-transform-origin: 100px -71px;
                        -o-transform-origin: 100px -71px;
                        transform-origin: 100px -71px;
                    }
                    .badges:before {
                        content: '';
                        position: absolute;
                        top: 90px;
                        left: 90px;
                        width: 20px;
                        height: 20px;
                        border-radius: 100%;
                        -webkit-box-shadow: 0px -82px 0px -2px #fff,
                            0px -100px #ffa6ca, 20px -98px #ffa6ca,
                            39px -94px #ffa6ca, 56px -85px #ffa6ca,
                            71px -72px #ffa6ca, 83px -57px #ffa6ca,
                            93px -40px #ffa6ca, 98px -20px #ffa6ca,
                            100px 0px #ffa6ca, -20px -98px #ffa6ca,
                            -39px -94px #ffa6ca, -71px -72px #ffa6ca,
                            -56px -85px #ffa6ca, -83px -57px #ffa6ca,
                            -93px -40px #ffa6ca, -98px -20px #ffa6ca,
                            -100px 0px #ffa6ca, 0px 100px #ffa6ca,
                            -20px 98px #ffa6ca, -39px 94px #ffa6ca,
                            -56px 85px #ffa6ca, -71px 72px #ffa6ca,
                            -83px 57px #ffa6ca, -93px -40px #ffa6ca,
                            -98px 20px #ffa6ca, -93px 40px #ffa6ca,
                            20px 98px #ffa6ca, 39px 94px #ffa6ca,
                            56px 85px #ffa6ca, 71px 72px #ffa6ca,
                            83px 57px #ffa6ca, 93px 40px #ffa6ca,
                            98px 20px #ffa6ca;

                        -moz-box-shadow: 0px -82px 0px -2px #fff,
                            0px -100px #ffa6ca, 20px -98px #ffa6ca,
                            39px -94px #ffa6ca, 56px -85px #ffa6ca,
                            71px -72px #ffa6ca, 83px -57px #ffa6ca,
                            93px -40px #ffa6ca, 98px -20px #ffa6ca,
                            100px 0px #ffa6ca, -20px -98px #ffa6ca,
                            -39px -94px #ffa6ca, -71px -72px #ffa6ca,
                            -56px -85px #ffa6ca, -83px -57px #ffa6ca,
                            -93px -40px #ffa6ca, -98px -20px #ffa6ca,
                            -100px 0px #ffa6ca, 0px 100px #ffa6ca,
                            -20px 98px #ffa6ca, -39px 94px #ffa6ca,
                            -56px 85px #ffa6ca, -71px 72px #ffa6ca,
                            -83px 57px #ffa6ca, -93px -40px #ffa6ca,
                            -98px 20px #ffa6ca, -93px 40px #ffa6ca,
                            20px 98px #ffa6ca, 39px 94px #ffa6ca,
                            56px 85px #ffa6ca, 71px 72px #ffa6ca,
                            83px 57px #ffa6ca, 93px 40px #ffa6ca,
                            98px 20px #ffa6ca;

                        -o-box-shadow: 0px -82px 0px -2px #fff,
                            0px -100px #ffa6ca, 20px -98px #ffa6ca,
                            39px -94px #ffa6ca, 56px -85px #ffa6ca,
                            71px -72px #ffa6ca, 83px -57px #ffa6ca,
                            93px -40px #ffa6ca, 98px -20px #ffa6ca,
                            100px 0px #ffa6ca, -20px -98px #ffa6ca,
                            -39px -94px #ffa6ca, -71px -72px #ffa6ca,
                            -56px -85px #ffa6ca, -83px -57px #ffa6ca,
                            -93px -40px #ffa6ca, -98px -20px #ffa6ca,
                            -100px 0px #ffa6ca, 0px 100px #ffa6ca,
                            -20px 98px #ffa6ca, -39px 94px #ffa6ca,
                            -56px 85px #ffa6ca, -71px 72px #ffa6ca,
                            -83px 57px #ffa6ca, -93px -40px #ffa6ca,
                            -98px 20px #ffa6ca, -93px 40px #ffa6ca,
                            20px 98px #ffa6ca, 39px 94px #ffa6ca,
                            56px 85px #ffa6ca, 71px 72px #ffa6ca,
                            83px 57px #ffa6ca, 93px 40px #ffa6ca,
                            98px 20px #ffa6ca;

                        box-shadow: 0px -82px 0px -2px #fff, 0px -100px #ffa6ca,
                            20px -98px #ffa6ca, 39px -94px #ffa6ca,
                            56px -85px #ffa6ca, 71px -72px #ffa6ca,
                            83px -57px #ffa6ca, 93px -40px #ffa6ca,
                            98px -20px #ffa6ca, 100px 0px #ffa6ca,
                            -20px -98px #ffa6ca, -39px -94px #ffa6ca,
                            -71px -72px #ffa6ca, -56px -85px #ffa6ca,
                            -83px -57px #ffa6ca, -93px -40px #ffa6ca,
                            -98px -20px #ffa6ca, -100px 0px #ffa6ca,
                            0px 100px #ffa6ca, -20px 98px #ffa6ca,
                            -39px 94px #ffa6ca, -56px 85px #ffa6ca,
                            -71px 72px #ffa6ca, -83px 57px #ffa6ca,
                            -93px -40px #ffa6ca, -98px 20px #ffa6ca,
                            -93px 40px #ffa6ca, 20px 98px #ffa6ca,
                            39px 94px #ffa6ca, 56px 85px #ffa6ca,
                            71px 72px #ffa6ca, 83px 57px #ffa6ca,
                            93px 40px #ffa6ca, 98px 20px #ffa6ca;
                    }
                    .badges:after {
                        content: '';
                        position: absolute;
                        top: -70px;
                        left: 99px;
                        width: 2px;
                        height: 81px;
                        border-radius: 0%;
                        background: #000;
                    }

                    @-webkit-keyframes swing {
                        0% {
                            -webkit-transform: rotate(5deg);
                        }
                        50% {
                            -webkit-transform: rotate(-5deg);
                        }
                        100% {
                            -webkit-transform: rotate(5deg);
                        }
                    }
                    @-moz-keyframes swing {
                        0% {
                            -moz-transform: rotate(5deg);
                        }
                        50% {
                            -moz-transform: rotate(-5deg);
                        }
                        100% {
                            -moz-transform: rotate(5deg);
                        }
                    }
                    @-o-keyframes swing {
                        0% {
                            -o-transform: rotate(5deg);
                        }
                        50% {
                            -o-transform: rotate(-5deg);
                        }
                        100% {
                            -o-transform: rotate(5deg);
                        }
                    }
                    @keyframes swing {
                        0% {
                            transform: rotate(5deg);
                        }
                        50% {
                            transform: rotate(-5deg);
                        }
                        100% {
                            transform: rotate(5deg);
                        }
                    }

                    @media (max-width: 500px) {
                        .badges {
                            margin-top: 80px;
                        }
                    }
                `}
            </style>
        </>
    );
}
