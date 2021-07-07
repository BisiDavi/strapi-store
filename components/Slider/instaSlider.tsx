import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type InstagramSliderType = {
    permalink: string;
    id: string;
    media_url: string;
    media_type?: string;
};

interface InstagramSliderProps {
    InstagramMedia: InstagramSliderType[];
}

export default function InstaSlider({
    InstagramMedia,
}: InstagramSliderProps): JSX.Element {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div>
            <h1>Jenjen's Luxury Wigs Instagram Feeds</h1>
            <Slider {...settings}>
                {InstagramMedia.map((media) => (
                    <a target='_blank' className='mx-1' href={media.permalink}>
                        <span key={media.id}>
                            <img
                                src={media.media_url}
                                height={300}
                                width={300}
                                className='instagramImage'
                            />
                        </span>
                    </a>
                ))}
            </Slider>

            <style jsx>
                {`
                    h1 {
                        text-align: center;
                        margin: 10px auto;
                        font-size: 20px;
                    }
                    .medias {
                        display: flex;
                        align-items: center;
                    }
                    .medias span {
                        border: 5px solid white;
                    }
                `}
            </style>
        </div>
    );
}
