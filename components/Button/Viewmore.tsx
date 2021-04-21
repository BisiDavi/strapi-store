import React from "react";
import Link from "next/link";

const Viewmore = () => {
    return (
        <div>
            <Link href="/collection/all" passHref>
                <button className="mx-auto">View More</button>
            </Link>
            <style jsx>
                {`
                    button {
                        color: white;
                        background-color: black;
                        width: 200px;
                        height: 80px;
                        display: flex;
                        border: none;
                        font-weight: bold;
                        font-size: 24px;
                        justify-content: center;
                        align-items: center;
                    }

                    button:hover {
                        opacity: 0.8;
                    }
                `}
            </style>
        </div>
    );
};

export default Viewmore;
