import React from "react";

export const CustomWigButtonGrp = ({ data, inputHandler }) => {
    return (
        <div className="buttonGrp">
            {data.content.map((item, index) => (
                <button
                    type="button"
                    key={index}
                    id={item}
                    data-price={20}
                    value={item}
                    onClick={inputHandler}
                >
                    {item}
                </button>
            ))}
            <style jsx>
                {`
                    .selected {
                        background-color: blue;
                        color: white;
                    }
                    .not-selected {
                        background-color: gray;
                        color: black;
                    }
                    .buttonGrp button {
                        margin: 0px 10px;
                        padding: 0px 4px;
                        height: 30px;
                    }

                    .buttonGrp {
                        display: flex;
                        align-items: center;
                        padding: 0px 20px;
                        margin: 10px 0px;
                        justify-content: space-between;
                    }
                `}
            </style>
        </div>
    );
};
