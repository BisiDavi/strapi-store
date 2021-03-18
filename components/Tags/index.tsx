import React from "react";

const index = ({ text }) => {
    return (
        <div className="tag">
            <h5>{text}</h5>
            <style jsx>{`
                .tag {
                    background-color: black;
                }
                h5 {
                    color: #ffa6ca;
                }
            `}</style>
        </div>
    );
};

export default index;
