import React from 'react';
import './Buttons.css'
import Button from './Button/Button';

type PropsType = {
    Count: () => void
    Reset: () => void
    resetDisabled: boolean
    incDisabled: boolean
}

const Buttons =(props: PropsType) => {


    return (
            <div className="buttons">
                <Button title={'inc'} callBack={props.Count} disabled={props.incDisabled}/>
                <Button title={'reset'} callBack={props.Reset} disabled={props.resetDisabled}/>
            </div>
    )
}
export default Buttons