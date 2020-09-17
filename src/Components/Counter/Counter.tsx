import React, {useEffect, useState} from 'react';
import './Counter.css';
import Buttons from '../Buttons/Buttons';
import Screen from './Screen/Screen';

type PropsType = {
    maxValue: number
    count: number
    Count: () => void
    Reset: () => void
    incDisabled: boolean
    resetDisabled: boolean
}

const Counter = (props: PropsType) => {

    return (
        <div className="counter">
            <Screen maxValue={props.maxValue}
                    count={props.count}/>
            <Buttons Count={props.Count}
                     Reset={props.Reset}
                     incDisabled={props.incDisabled}
                     resetDisabled={props.resetDisabled}
            />
        </div>
    );
};
export default Counter;