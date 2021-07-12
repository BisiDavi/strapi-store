import React from 'react';
import { priceRegex } from '@utils/.';

export function CustomWigButtonGrp({ data, inputHandler }) {
    return (
        <div className='buttonGroup'>
            <p>{data.name} :</p>
            <div className='buttonGrp'>
                {data.content.map((item, index) => (
                    <button
                        type='button'
                        key={index}
                        id={item}
                        data-price={priceRegex(item)}
                        value={item}
                        onClick={inputHandler}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <style jsx>
                {`
                    .buttonGroup {
                        display: flex;
                        flex-direction: column;
                        margin: 10px auto;
                    }
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
}
