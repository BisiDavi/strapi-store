import React, { useRef, useState, FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import style from "../../styles/HomepageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomepageSlider: FC = (): JSX.Element => {
    const [sliderState, setSliderState] = useState(true);
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    };
    const play = () => {
        sliderRef.current.slickPlay();
        setSliderState(false);
    };

    const pause = () => {
        sliderRef.current.slickPause();
        setSliderState(true);
    };

    return (
        <div className="homepageSlider">
            <Slider
                className={`${style.pageslider} pageslider`}
                {...settings}
                ref={sliderRef}
            >
                <div className="content">
                    <Image
                        src="/slider1.png"
                        className="sliderImg"
                        width={1000}
                        height={400}
                        layout="responsive"
                    />
                </div>
                <div className="content">
                    <Image
                        src="/slider2.png"
                        className="sliderImg"
                        width={1000}
                        height={400}
                        layout="responsive"
                    />
                </div>
            </Slider>

            <div className="btnGrp">
                <div className="slider-control">
                    {sliderState ? (
                        <button className="button" onClick={play}>
                            <i className="far fa-play-circle"></i>
                        </button>
                    ) : (
                        <button className="button" onClick={pause}>
                            <i className="far fa-pause-circle"></i>
                        </button>
                    )}
                </div>
            </div>
            <style jsx>{`
                .slider {
                    width: 100%;
                }
                .homepageSlider {
                    height: 100%;
                    width: 100%;
                    position: relative;
                    background-color: #ffa5c8;
                }
                .content {
                    color: white;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    margin: auto;
                    align-item: center;
                    background-color: #ffa5c8;
                }
                .slider-control {
                    background: rgba(0, 0, 0, 0.3);
                    margin: auto;
                    border-radius: 50%;
                    height: 40px;
                    width: 40px;
                }
                .slider-control button:hover {
                    color: white;
                }
                .btnGrp {
                    bottom: 10px;
                    z-index: 1000;
                    margin: auto;
                    position: absolute;
                    width: 100%;
                    display: flex;
                    margin: auto;
                }
                .h3 {
                    text-align: center;
                }
                .slider-control button {
                    background: transparent;
                    margin: 6px 8px;
                    color: #ffa5c8;
                    border: none;
                    font-size: 25px;
                    cursor:pointer;
                }
                .slider-control button:focus {
                    outline: none;
                }
                .slider-control button:hover {
                    opacity: 0.5;
                }
            `}</style>
        </div>
    );
};

export default HomepageSlider;
