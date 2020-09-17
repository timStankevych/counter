import React from 'react';
import './Screen.css'

type PropsType = {
    count: number
    maxValue: number
}

const Screen =(props: PropsType) => {

    const classNameLogic = props.count === props.maxValue ? 'screenMax' : 'screen';

    return (
        <div className={classNameLogic}>{props.count}</div>
    )
}
export default Screen