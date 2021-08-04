export default function PromoBanner() {
    return (
        <div data-cy="promoBanner" className='promoBanner'>
            <h4>
                Shop JenJen&#39;s Luxury Hair | Get virgin Hair at Affordable
                Price{' '}
            </h4>
            <style jsx>{`
                .promoBanner {
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    height: 50px;
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
                        font-size: 15px;
                        line-height: 18px;
                    }
                }
                @media (max-width: 400px) {
                    h4,
                    h6 {
                        font-size: 14px;
                        line-height: 15px;
                    }
                }
            `}</style>
        </div>
    );
}
