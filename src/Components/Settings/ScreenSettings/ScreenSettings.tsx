import React from 'react';
import './ScreenSettings.css'

type PropsType = {
    maxValue: number
    minValue: number
}


const ScreenSettings =(props: PropsType) => {


    return (
        <div>
            <div>max value:<input type="number" value={props.maxValue}/></div>
            <div>min value:<input type="number" value={props.minValue}/></div>
        </div>
    )
}
export default ScreenSettings