import React, { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
        console.log("counter", counter);
    };

    const decrementCounter = () => {
        counter > 0 && setCounter(counter - 1);
        console.log("counter", counter);
    };

    return { counter, incrementCounter, decrementCounter };
};

export default useCounter;
