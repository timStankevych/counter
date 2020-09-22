import React from 'react';
import './Settings.module.css'
import ScreenSettings from './ScreenSettings/ScreenSettings';
import Button from '../Buttons/Button/Button';

type PropsType = {
    Min: (value: number) => void
    Max: (value: number) => void
    onClickSet: () => void
    min: number
    max: number
    setDisabled: (value: boolean) => void
    disabled: boolean
    error: boolean
}

const Settings = (props: PropsType) => {

    return (
        <div className="counter">
            <ScreenSettings
                Min={props.Min}
                Max={props.Max}
                min={props.min}
                max={props.max}
                setDisabled={props.setDisabled}
                error={props.error}
            />
            <div className="buttons">
                <Button title={'set'} callBack={props.onClickSet} disabled={props.disabled}/>
            </div>
        </div>
    )
}
export default Settings