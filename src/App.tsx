import React, {useEffect, useState} from 'react';
import Counter from './Components/Counter/Counter';
import Settings from './Components/Settings/Settings';
import cl from './App.module.css';

const App = () => {

    const [minValue, setMinValue] = useState<number>(1);
    const [maxValue, setMaxValue] = useState<number>(2);
    const [min, setMin] = useState<number>(3);
    const [max, setMax] = useState<number>(4);
    const [error, setError] = useState('enter values and press "set"');
    const [disabled, setDisabled] = useState(true);

    let Min = (value: number) => setMin(value)
    let Max = (value: number) => setMax(value)

    const onClickSet = () => {
        setMinValue(min);
        setMaxValue(max);
        setCount(min);
    }
    let [count, setCount] = useState(minValue);


    const errorHandler = () => {
        if (minValue < 0 || (minValue > 0 && minValue === maxValue) || maxValue < minValue) {
            setError('Incorrect value');
            setDisabled(true);
        } else {
            setError('enter values and press "set"');
            setDisabled(false);
        }
    };

    useEffect(() => {
        errorHandler();
    }, [minValue, maxValue]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (minValue === 0) {
            const sV = localStorage.getItem('startValue');
            sV && setMinValue(+sV);
        }
    }, [minValue]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (maxValue === 0) {
            const mV = localStorage.getItem('maxValue');
            mV && setMaxValue(+mV);
            localStorage.clear();
        }
    }, [maxValue]); // eslint-disable-line react-hooks/exhaustive-deps

    const Count = () => {
        if (count < maxValue) {
            return (setCount(count + 1));
        }
    };

    const incDisabled = count >= maxValue;
    const resetDisabled = count === minValue;
    const Reset = () => setCount(minValue);

    return (
        <div className={cl.App}>
            <Settings
            Min={Min}
            Max={Max}
            onClickSet={onClickSet}/>
            <Counter maxValue={maxValue}
                     count={count}
                     Count={Count}
                     Reset={Reset}
                     incDisabled={incDisabled}
                     resetDisabled={resetDisabled}/>
        </div>
    );
};
export default App;