import React, {useEffect, useState} from 'react';
import './Counter.css'
import Buttons from '../Buttons/Buttons';
import Screen from './Screen/Screen';

type CountType = number

const Counter = () => {

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [error, setError] = useState('enter values and press "set"')
    const [disabled, setDisabled] = useState(true)

    let min = minValue;
    let max = maxValue;

    let [count, setCount] = useState<CountType>(min)

    const errorHandler = () => {
        if (minValue < 0 || (minValue > 0 && minValue === maxValue) || maxValue < minValue) {
            setError('Incorrect value')
            setDisabled(true)
        } else {
            setError('enter values and press "set"')
            setDisabled(false)
        }
    }

    useEffect(() => {
        errorHandler()
    }, [minValue, maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (minValue === 0) {
            const sV = localStorage.getItem('startValue')
            sV && setMinValue(+sV)
        }
    }, [minValue]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (maxValue === 0) {
            const mV = localStorage.getItem('maxValue')
            mV && setMaxValue(+mV)
            localStorage.clear()
        }
    }, [maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

    const Count = () => {
        if (count < max) {
            return (setCount(count + 1))
        }
    }

    const incDisabled = count >= 5;
    const resetDisabled = count === 0;
    const Reset = () => setCount(minValue)


    return (
        <div className="counter">
            <Screen maxValue={maxValue}
                    count={count}/>
            <Buttons Count={Count}
                     Reset={Reset}
                     incDisabled={incDisabled}
                     resetDisabled={resetDisabled}
            />
        </div>
    )
}
export default Counter