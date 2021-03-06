export default function AlertBanner({ displayHandler }) {
    return (
        <div data-cy="alertBanner" className='alertBanner'>
            <h3 >
                DUE TO <b>COVID 19</b> PLEASE BE ADVISED THERE MAY BE DELAY IN
                SHIPMENT. WE APOLOGISE FOR ANY INCONVENIENCE. FOR FURTHER
                ASSISTANCE PLEASE CALL{' '}
                <a href='tel:+12674038663'>+1 (267) 403-8663</a>
            </h3>
            <button className='cancel' onClick={displayHandler}>
                <i className='fas fa-times-circle'></i>
            </button>
            <style jsx>
                {`
                    .alertBanner {
                        position: relative;
                    }
                    a {
                        color: black;
                        text-decoration: underline;
                        margin: 0px 5px;
                    }
                    h3 {
                        color: white;
                        font-size: 20px;
                        text-transform: lowercase;
                        background-color: #ffa6ca;
                        text-align: center;
                        width: 100%;
                        margin-bottom: 0;
                        font-weight: bold;
                        font-style: italic;
                        padding: 10px;
                        font-family: 'Montserrat', sans-serif;
                    }
                    button {
                        outline: none;
                        border: none;
                        position: absolute;
                        right: 20px;
                        top: 15%;
                        background: none;
                        color: white;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    @media (max-width: 768px) {
                        h3 {
                            font-size: 14px;
                            padding: 5px 15px;
                            line-height: 20px;
                        }
                        button.cancel i {
                            font-size: 15px;
                        }
                        button.cancel {
                            margin-top: 5px;
                            right: 8px;
                        }
                    }
                    @media (max-width: 380px) {
                        h3 {
                            font-size: 12px;
                            line-height: 15px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
