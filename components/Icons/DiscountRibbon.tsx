import React from 'react';
import { DiscountProps } from '../../types';

export default function DiscountRibbon({ discount }: DiscountProps) {
    return (
        <>
            <a href='#'>
                <div className='badges'>
                    <br />
                    <p>
                        <span className='firstLine'></span>
                        <br />
                        <span className='secondLine'>{discount}</span>
                        <br />
                        <span className='thirdLine'>discount</span>
                        <br />
                        <span className='fourthLine'></span>
                    </p>
                </div>
            </a>
            <style jsx>
                {`
                    body {
                        background: rgb(255, 166, 202);
                    }
                    a {
                        text-decoration: none;
                    }
                    .firstLine {
                        font-size: 24px;
                        font-weight: 300;
                    }
                    .secondLine {
                        font-size: 36px;
                        line-height: 36px;
                        font-weight: 600;
                    }
                    .thirdLine {
                        font-size: 26px;
                        line-height: 32px;
                        font-weight: 300;
                    }
                    .fourthLine {
                        font-size: 12px;
                        font-weight: 300;
                        position: relative;
                        top: -10px;
                    }

                    .badges {
                        position: relative;
                        margin: 140px auto;
                        width: 200px;
                        height: 200px;
                        background: #552f87;
                        border-radius: 100%;
                        color: #fff;
                        line-height: 25px;
                        text-align: center;
                        text-transform: uppercase;
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
                            0px -100px #552f87, 20px -98px #552f87,
                            39px -94px #552f87, 56px -85px #552f87,
                            71px -72px #552f87, 83px -57px #552f87,
                            93px -40px #552f87, 98px -20px #552f87,
                            100px 0px #552f87, -20px -98px #552f87,
                            -39px -94px #552f87, -71px -72px #552f87,
                            -56px -85px #552f87, -83px -57px #552f87,
                            -93px -40px #552f87, -98px -20px #552f87,
                            -100px 0px #552f87, 0px 100px #552f87,
                            -20px 98px #552f87, -39px 94px #552f87,
                            -56px 85px #552f87, -71px 72px #552f87,
                            -83px 57px #552f87, -93px -40px #552f87,
                            -98px 20px #552f87, -93px 40px #552f87,
                            20px 98px #552f87, 39px 94px #552f87,
                            56px 85px #552f87, 71px 72px #552f87,
                            83px 57px #552f87, 93px 40px #552f87,
                            98px 20px #552f87;

                        -moz-box-shadow: 0px -82px 0px -2px #fff,
                            0px -100px #552f87, 20px -98px #552f87,
                            39px -94px #552f87, 56px -85px #552f87,
                            71px -72px #552f87, 83px -57px #552f87,
                            93px -40px #552f87, 98px -20px #552f87,
                            100px 0px #552f87, -20px -98px #552f87,
                            -39px -94px #552f87, -71px -72px #552f87,
                            -56px -85px #552f87, -83px -57px #552f87,
                            -93px -40px #552f87, -98px -20px #552f87,
                            -100px 0px #552f87, 0px 100px #552f87,
                            -20px 98px #552f87, -39px 94px #552f87,
                            -56px 85px #552f87, -71px 72px #552f87,
                            -83px 57px #552f87, -93px -40px #552f87,
                            -98px 20px #552f87, -93px 40px #552f87,
                            20px 98px #552f87, 39px 94px #552f87,
                            56px 85px #552f87, 71px 72px #552f87,
                            83px 57px #552f87, 93px 40px #552f87,
                            98px 20px #552f87;

                        -o-box-shadow: 0px -82px 0px -2px #fff,
                            0px -100px #552f87, 20px -98px #552f87,
                            39px -94px #552f87, 56px -85px #552f87,
                            71px -72px #552f87, 83px -57px #552f87,
                            93px -40px #552f87, 98px -20px #552f87,
                            100px 0px #552f87, -20px -98px #552f87,
                            -39px -94px #552f87, -71px -72px #552f87,
                            -56px -85px #552f87, -83px -57px #552f87,
                            -93px -40px #552f87, -98px -20px #552f87,
                            -100px 0px #552f87, 0px 100px #552f87,
                            -20px 98px #552f87, -39px 94px #552f87,
                            -56px 85px #552f87, -71px 72px #552f87,
                            -83px 57px #552f87, -93px -40px #552f87,
                            -98px 20px #552f87, -93px 40px #552f87,
                            20px 98px #552f87, 39px 94px #552f87,
                            56px 85px #552f87, 71px 72px #552f87,
                            83px 57px #552f87, 93px 40px #552f87,
                            98px 20px #552f87;

                        box-shadow: 0px -82px 0px -2px #fff, 0px -100px #552f87,
                            20px -98px #552f87, 39px -94px #552f87,
                            56px -85px #552f87, 71px -72px #552f87,
                            83px -57px #552f87, 93px -40px #552f87,
                            98px -20px #552f87, 100px 0px #552f87,
                            -20px -98px #552f87, -39px -94px #552f87,
                            -71px -72px #552f87, -56px -85px #552f87,
                            -83px -57px #552f87, -93px -40px #552f87,
                            -98px -20px #552f87, -100px 0px #552f87,
                            0px 100px #552f87, -20px 98px #552f87,
                            -39px 94px #552f87, -56px 85px #552f87,
                            -71px 72px #552f87, -83px 57px #552f87,
                            -93px -40px #552f87, -98px 20px #552f87,
                            -93px 40px #552f87, 20px 98px #552f87,
                            39px 94px #552f87, 56px 85px #552f87,
                            71px 72px #552f87, 83px 57px #552f87,
                            93px 40px #552f87, 98px 20px #552f87;
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
                `}
            </style>
        </>
    );
}
