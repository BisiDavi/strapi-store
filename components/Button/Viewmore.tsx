import Link from 'next/link';

export default function Viewmore() {
    return (
        <div>
            <Link href='/collection/all' passHref>
                <button className='mx-auto'>View More</button>
            </Link>
            <style jsx>
                {`
                    button {
                        color: white;
                        background-color: black;
                        width: 150px;
                        height: 60px;
                        display: flex;
                        border: none;
                        font-weight: bold;
                        font-size: 18px;
                        justify-content: center;
                        align-items: center;
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
