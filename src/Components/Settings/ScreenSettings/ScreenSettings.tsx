import React, {useState} from 'react';
import cl from './ScreenSettings.module.css';

type PropsType = {
    Min: (value: number) => void
    Max: (value: number) => void
    min: number
    max: number
    errorHandler: () => void
    setDisabled: (value: boolean) => void
    error: boolean
}


const ScreenSettings = (props: PropsType) => {

    let maxCountElement = React.createRef<HTMLInputElement>();
    let minCountElement = React.createRef<HTMLInputElement>();

    let maxCountChange = () => {
        let max = maxCountElement.current ? Number(maxCountElement.current.value) : props.max;
        props.Max(max);
        props.errorHandler()
    };
    let minCountChange = () => {
        let min = minCountElement.current ? Number(minCountElement.current.value) : props.min;
        props.Min(min);
            props.errorHandler()

    };

    let inputClass = props.error ? cl.screen5 : cl.screen;

    return (
        <div>
            <div>max value:<input className={inputClass}
                                  type="number"
                                  ref={maxCountElement}
                                  onChange={maxCountChange} value={props.max}/>
            </div>
            <div>min value:<input className={inputClass}
                                  type="number"
                                  ref={minCountElement}
                                  onChange={minCountChange} value={props.min}/>
            </div>
        </div>
    );
};
export default ScreenSettings;