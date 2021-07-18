import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    return (
        <div className='InstagramSlider'>
            <h1 className='mb-4'>Jenjen&#39;s Luxury Wigs Instagram Feeds</h1>
            <Slider className='instagramSlider' {...settings}>
                {InstagramMedia.map((media) => {
                    if (media.media_type === 'IMAGE') {
                        return (
                            <a
                                target='_blank'
                                key={media.id}
                                rel='noreferrer'
                                className='mx-1'
                                href={media.permalink}
                            >
                                <span key={media.id}>
                                    <Image
                                        src={media.media_url}
                                        height={300}
                                        width={300}
                                        alt={media.caption}
                                        className='instagramImage'
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
                                className='mx-2'
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
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                    <p className='caption'>{media.caption}</p>
                                </span>
                            </a>
                        );
                    } else if (media.media_type === 'CAROUSEL_ALBUM') {
                        return (
                            <a
                                target='_blank'
                                key={media.id}
                                rel='noreferrer'
                                className='mx-1'
                                href={media.permalink}
                            >
                                <span key={media.id}>
                                    <Image
                                        src={media.media_url}
                                        height={300}
                                        width={300}
                                        alt={media.caption}
                                        className='instagramImage'
                                    />
                                </span>
                                <p className='caption'>{media.caption}</p>
                            </a>
                        );
                    }
                })}
            </Slider>

            <style jsx>
                {`
                    .InstagramSlider {
                        margin: 30px auto;
                        min-height: 420px;
												width:100%;
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
                        font-family: 'Montserrat', sans-serif;
                    }
                `}
            </style>
        </div>
    );
}
