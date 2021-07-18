export default function AnimatingArrow() {
    return (
        <>
            <ul className='loading-frame'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </ul>
            <style jsx>
                {`
                    .loading-frame {
                        height: 50px;
                    }
                    .circle {
                        position: absolute;
                        height: 10px;
                        width: 10px;
                        border-radius: 10px;
                        background-color: #ffa6ca;
                        animation: animate linear 2s infinite;
                    }
                    .circle:nth-child(1) {
                        animation-delay: 0.9s;
                    }
                    .circle:nth-child(2) {
                        animation-delay: 1.1s;
                        transform: translate(18px, 13px);
                    }
                    .circle:nth-child(3) {
                        animation-delay: 1.3s;
                        transform: translate(35px, 25px);
                    }
                    .circle:nth-child(4) {
                        animation-delay: 1.1s;
                        transform: translate(18px, 38px);
                    }
                    .circle:nth-child(5) {
                        animation-delay: 0.9s;
                        transform: translate(0px, 50px);
                    }
                    .circle:nth-child(6) {
                        animation-delay: 0.9s;
                        transform: translate(0, 25px);
                    }
                    .circle:nth-child(7) {
                        animation-delay: 0.7s;
                        transform: translate(-20px, 25px);
                    }
                    .circle:nth-child(8) {
                        animation-delay: 0.5s;
                        transform: translate(-40px, 25px);
                    }
                    .circle:nth-child(9) {
                        animation-delay: 0.3s;
                        transform: translate(-60px, 25px);
                    }
                    .circle:nth-child(10) {
                        animation-delay: 0.1s;
                        transform: translate(-80px, 25px);
                    }
                    @keyframes animate {
                        0%,
                        100% {
                            background-color: red;
                        }
                        50% {
                            background-color: #fff;
                        }
                    }
                `}
            </style>
        </>
    );
}
