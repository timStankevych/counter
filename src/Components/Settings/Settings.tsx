import React from 'react';
import './Settings.module.css'
import ScreenSettings from './ScreenSettings/ScreenSettings';
import Button from '../Buttons/Button/Button';


const Settings = () => {


    return (
        <div className="counter">
            <ScreenSettings
            maxValue={12}
            minValue={1}
            />
            <div className="buttons">
                <Button title={'inc'} callBack={() => {}} disabled={false}/>
            </div>
        </div>
    )
}
export default Settings