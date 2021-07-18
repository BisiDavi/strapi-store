import Image from 'next/image';
import Slider from 'react-slick';
import { InstagramLoader } from '@components/loader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@styles/instagramSlider.module.css';

type InstagramSliderType = {
    permalink: string;
    id: string;
    media_url: string;
    media_type?: string;
    caption?: string;
    thumbnail_url: string;
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
        pauseOnHover: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
    const instaPlaceholder = '/imgPlaceholder.svg';
    return (
        <div className='InstagramSlider'>
            <h1 className='mb-4'>Jenjen&#39;s Luxury Wigs Instagram Feeds</h1>
            {InstagramMedia !== null && InstagramMedia !== undefined ? (
                <Slider
                    className={`${styles.Slider} instagramSlider`}
                    {...settings}
                >
                    {InstagramMedia.map((media) => {
                        if (media.media_type === 'IMAGE') {
                            return (
                                <a
                                    target='_blank'
                                    key={media.id}
                                    rel='noreferrer'
                                    className='mx-1 sliderWrapper'
                                    href={media.permalink}
                                >
                                    <span key={media.id}>
                                        <Image
                                            quality='85'
                                            src={
                                                media.media_url ||
                                                instaPlaceholder
                                            }
                                            height={300}
                                            width={300}
                                            alt={media.caption}
                                        />
                                    </span>
                                    <p className='caption'>{media.caption}</p>
                                </a>
                            );
                        } else if (media.media_type === 'VIDEO') {
                            return (
                                <a
                                    target='_blank'
                                    key={media.id}
                                    rel='noreferrer'
                                    className='mx-2 sliderWrapper'
                                    href={media.permalink}
                                >
                                    <span>
                                        <video
                                            width='300'
                                            height='300'
                                            controls
                                            poster={media.thumbnail_url}
                                        >
                                            <source
                                                src={media.media_url}
                                                type='video/mp4'
                                            />
                                            <source
                                                src={media.media_url}
                                                type='video/ogg'
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    </span>
                                    <p className='caption'>{media.caption}</p>
                                </a>
                            );
                        } else if (media.media_type === 'CAROUSEL_ALBUM') {
                            return (
                                <a
                                    target='_blank'
                                    key={media.id}
                                    rel='noreferrer'
                                    className='mx-1 sliderWrapper'
                                    href={media.permalink}
                                >
                                    <span key={media.id}>
                                        <Image
                                            quality='85'
                                            src={
                                                media.media_url ||
                                                instaPlaceholder
                                            }
                                            height={300}
                                            width={300}
                                            alt={media.caption}
                                        />
                                    </span>
                                    <p className='caption'>{media.caption}</p>
                                </a>
                            );
                        }
                    })}
                </Slider>
            ) : (
                <InstagramLoader />
            )}
            <style jsx>
                {`
                    .InstagramSlider {
                        margin: 30px auto;
                        min-height: 420px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }
                    h1 {
                        text-align: center;
                        margin: 10px auto;
                        font: bold normal 25px/30px 'Dancing Script', cursive;
                    }
                    .medias {
                        display: flex;
                        align-items: center;
                    }
                    .medias span {
                        border: 5px solid white;
                    }
                    p.caption {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 15px;
                        text-align: center;
                        font-style: italic;
                        margin: 10px auto;
                        font-family: 'Montserrat', sans-serif;
                    }
                    .sliderWrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .sliderWrapper span {
                        width: 100%;
                        height: fit-content;
                        display: flex;
                        margin: auto;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
}
