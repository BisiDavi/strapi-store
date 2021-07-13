import { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from '@styles/HomepageSlider.module.css';

export default function HomepageSlider(): JSX.Element {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 2500,
    };

    //const sliderArr = ['/mainBg.webp', '/pinkBg.webp'];
    const sliderArr = ['/mainBg.webp'];

    return (
        <div className='homepageSlider'>
            <Slider className={`${style.pageslider} pageslider`} {...settings}>
                {sliderArr.map((slider) => (
                    <div key={uuidv4()} className='content'>
                        <Image
                            src={slider}
                            className={style.sliderImg}
                            width={700}
                            height={300}
                            alt={slider}
                            layout='responsive'
                        />
                    </div>
                ))}

                <div className='content slider'>
                    <div className='slider-img'>
                        <Image
                            src='/slider5.webp'
                            className={style.sliderImg}
                            width={700}
                            height={300}
                            alt='banner'
                            layout='responsive'
                        />
                    </div>
                    <div className='gif'>
                        <Image
                            src='/bannerGif.gif'
                            className='sliderImg'
                            width={600}
                            height={600}
                            alt='gif'
                            layout='responsive'
                        />
                    </div>
                </div>
            </Slider>
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
                .content.slider {
                    position: relative;
                }
                .slider-img {
                    position: relative;
                }
                .gif {
                    height: 400px;
                    width: 400px;
                    position: absolute;
                    top: 260px;
                    left: 140px;
                    border: 16px solid white;
                    z-index: 1000;
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
                    margin: 0px 8px;
                    color: #ffa5c8;
                    border: none;
                    font-size: 25px;
                    cursor: pointer;
                }
                .slider-control button:focus {
                    outline: none;
                }
                .slider-control button:hover {
                    opacity: 0.5;
                }
                @media (max-width: 1440px) and (min-width: 1200px) {
                    .gif {
                        width: 300px;
                        height: 300px;
                        top: 35%;
                        left: 5%;
                        border: 10px solid white;
                    }
                }
                @media (max-width: 1200px) and (min-width: 768px) {
                    .gif {
                        width: 200px;
                        height: 200px;
                        top: 35%;
                        left: 5%;
                        border: 10px solid white;
                    }
                }
                @media (max-width: 768px) and (min-width: 500px) {
                    .gif {
                        width: 140px;
                        height: 140px;
                        border: 5px solid white;
                        left: 5%;
                        top: 27%;
                    }
                }
                @media (max-width: 500px) {
                    .gif {
                        top: 27%;
                        left: 10%;
                        width: 90px;
                        border: 5px solid white;
                        height: 90px;
                    }
                    .slider-control {
                        margin-right: 25%;
                        height: 25px;
                        padding: 0px;
                        width: 25px;
                        margin-bottom: -10px;
                        position: relative;
                    }
                    .slider-control button {
                        height: 20px;
                        width: 20px;
                    }
                    .btnGrp .slider-control button {
                        top: 1px;
                        margin: 0px;
                        left: 3px;
                        padding: 0px;
                        position: absolute;
                    }
                    .btnGrp .slider-control button i {
                        font-size: 20px;
                        position: absolute;
                        top: 2px;
                        left: -1px;
                        z-index: 1000;
                    }
                }
                @media (max-width: 340px) {
                    .gif {
                        height: 75px;
                        width: 75px;
                    }
                }
            `}</style>
        </div>
    );
}
