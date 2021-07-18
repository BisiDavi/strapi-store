import Link from 'next/link';
import AnimatingArrow from '@components/Icons/AnimatingArrow';

export default function Viewmore() {
    return (
        <div>
            <Link href='/collection/all' passHref>
                <div className='viewmore'>
                    <button className='mx-auto'>
                        <span>View More</span>
                    </button>
                    {/*<AnimatingArrow />*/}
                </div>
            </Link>
            <style jsx>
                {`
                    .viewmore {
                        display: flex;
                        align-items: center;
                    }
                    button {
                        color: white;
                        background-color: #ffa6ca;
                        width: 150px;
                        height: 60px;
                        font-weight: bold;
                        display: flex;
                        border-radius: 30px;
                        border: none;
                        font-weight: bold;
                        font-size: 18px;
                        justify-content: center;
                        align-items: center;
                    }

                    button span {
                        margin: 0px 10px;
                    }

                    button:hover {
                        opacity: 0.8;
                    }
                    @media (max-width: 768px) {
                        button {
                            padding: 0px;
                            width: 150px;
                            font-size: 18px;
                            height: 50px;
                        }
                    }
                    @media (max-width: 500px) {
                        button {
                            padding: 0px;
                            width: 130px;
                            font-size: 16px;
                            height: 50px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
