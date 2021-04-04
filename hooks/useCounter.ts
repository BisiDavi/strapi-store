import React, { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const incrementCounter = (index) => {
        setCounter(counter + 1);
    };

    const decrementCounter = (index) => {
        counter > 0 && setCounter(counter - 1);
    };

    return { counter, incrementCounter, decrementCounter };
};

export default useCounter;
