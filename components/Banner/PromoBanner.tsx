import React from 'react';

export default function PromoBanner() {
    return (
        <div className='promoBanner'>
            <h4>
                Shop JenJen&#39;s Luxury Hair | Get virgin Hair at Affordable Price{' '}
            </h4>
            <style jsx>{`
                .promoBanner {
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    height: 30px;
                }
                .desktopHide {
                    display: none;
                }
                h4 {
                    color: #ffa6ca;
                    margin: 0px auto;
                    padding: 0px;
                    font: 700 normal 24px/24px 'Dancing Script', cursive;
                    letter-spacing: 4px;
                }

                @media (max-width: 768px) {
                    .promoBanner {
                        flex-direction: column;
                    }
                    h4,
                    h6 {
                        font-size: 12px;
                    }
                }
                @media (max-width: 400px) {
                    h4,
                    h6 {
                        font-size: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

