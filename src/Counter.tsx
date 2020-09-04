import React, {useState} from 'react';
import './Counter.css'
import Buttons from './Components/Buttons/Buttons';
import Screen from './Components/Screen/Screen';

type CountType = number

const Counter =() => {
    const minValue = 0;
    const maxValue = 5;

    let [count, setCount] = useState<CountType>(minValue)

    const Count = () => {
        if(count < maxValue){
            return( setCount(count + 1))}
    }

    const incDisabled = count >= 5;
    const resetDisabled = count === 0;
    const Reset = () => setCount(minValue)


    return (
        <div className="counter">
            <Screen maxValue={maxValue} count={count}/>
            <Buttons Count={Count}
                     Reset={Reset}
                     incDisabled={incDisabled}
                     resetDisabled={resetDisabled}
            />
        </div>
    )
}
export default Counter