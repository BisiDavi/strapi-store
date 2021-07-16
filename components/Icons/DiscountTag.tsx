import { DiscountProps } from '../../types';

export default function DiscountTag({ discount }: DiscountProps) {
    return (
        <>
            <div className='ribbon text-center'>
                <div className='content'>
                    <h3>{discount}</h3>
                    <p>discount</p>
                </div>
            </div>
            <style jsx>
                {`
                    .ribbon {
                        position: absolute;
                        display: inline-block;
                        top: 0.3em;
                        right: 0.8em;
                        max-width: 5em;
                        color: #fff;
                        z-index: 1;
                    }

                    .content {
                        margin-top: 20px;
                        margin-right: 10px;
                    }
                    .ribbon h3 {
                        font: bold normal 20px/18px 'Dancing Script', 'Lato',
                            sans-serif;
                        margin-bottom: 2px;
                    }
                    .ribbon p {
                        font: normal normal 16px/18px 'Dancing Script', 'Lato',
                            sans-serif;
                        margin-bottom: 2px;
                    }

                    .ribbon::after {
                        position: absolute;
                        top: -1.5em;
                        right: -6em;
                        content: '';
                        height: 7em;
                        width: 15em;
                        transform: rotatez(45deg);
                        background-color: rgb(255, 166, 202);
                        z-index: -1;
                    }
                    @media (max-width: 768px) {
                        .ribbon::after {
                            height: 6em;
                        }
                        .content {
                            margin-top: 15px;
                            margin-right: 0px;
                        }
                    }
                `}
            </style>
        </>
    );
}
