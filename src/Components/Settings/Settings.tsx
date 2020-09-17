import React from 'react';
import './Settings.module.css'
import ScreenSettings from './ScreenSettings/ScreenSettings';
import Button from '../Buttons/Button/Button';

type PropsType = {
    Min: (value: number) => void
    Max: (value: number) => void
    onClickSet: () => void
}

const Settings = (props: PropsType) => {

    return (
        <div className="counter">
            <ScreenSettings
                Min={props.Min}
                Max={props.Max}
            />
            <div className="buttons">
                <Button title={'set'} callBack={props.onClickSet} disabled={false}/>
            </div>
        </div>
    )
}
export default Settings