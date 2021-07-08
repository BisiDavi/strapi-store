import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useRedux() {
    const dispatch = useDispatch();

    function selectState(stateNode) {
        const selectedState = useSelector((state) => state[stateNode]);
        return selectedState;
    }

    return {
        dispatch,
        selectState,
    };
}
