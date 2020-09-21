import React, {useEffect, useState} from 'react';
import Counter from './Components/Counter/Counter';
import Settings from './Components/Settings/Settings';
import cl from './App.module.css';

const App = () => {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    const [errorText, setErrorText] = useState('enter values and press "set"');
    const [display, setDisplay] = useState(errorText);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(minValue);

    let Min = (value: number) => setMin(value);
    let Max = (value: number) => setMax(value);

    const onClickSet = () => {
        setMinValue(min);
        setMaxValue(max);
        setCount(min);
        setDisabled(true);
        setDisplay(String(count));
    };


    const errorHandler = () => {
        if (min > max || min < 0 || min === max) {
            setErrorText('Incorrect value');
            setDisabled(true);
            setError(true);

        }
        if (min >= 0 && max > min && min !== max) {
            setErrorText('enter values and press "set"');
            setDisabled(false);
            setError(false);
        }
    };


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
                min={min}
                max={max}
                onClickSet={onClickSet}
                disabled={disabled}
                setDisabled={setDisabled}
                errorHandler={errorHandler}
                error={error}/>
            <Counter maxValue={maxValue}
                     display={display}
                     Count={Count}
                     Reset={Reset}
                     incDisabled={incDisabled}
                     resetDisabled={resetDisabled}
                     errorText={errorText}/>
        </div>
    );
};
export default App;