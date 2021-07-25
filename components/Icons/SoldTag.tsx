export default function SoldTag() {
    return (
        <>
            <div className='ribbon text-center'>
                <div className='content'>
                    <h2>Sold</h2>
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
                    .ribbon h2 {
                        font: bold normal 25px/18px 'Dancing Script', 'Lato',
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
                        transform: rotate(45deg);
                        background-color: red;
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
