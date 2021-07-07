import React from 'react';
import Image from 'next/image';

export default function InstagramSlider({
    InstagramMedia,
}: InstagramSliderProps) {
    return (
        <div className='medias mb-4'>
            {InstagramMedia.map((media) => (
                <a target='_blank' className='mx-3' href={media.permalink}>
                    <span key={media.id}>
                        <img
                            src={media.media_url}
                            height={200}
                            width={200}
                            className='instagramImage'
                        />
                    </span>
                </a>
            ))}

            <style jsx>
                {`
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

type InstagramSliderType = {
    permalink: string;
    id: string;
    media_url: string;
    media_type?: string;
};

interface InstagramSliderProps {
    InstagramMedia: InstagramSliderType[];
}
