import React from 'react';
import './Screen.css'

type PropsType = {
    display: string
    maxValue: number
}

const Screen =(props: PropsType) => {

    const classNameLogic = Number(props.display) === props.maxValue ? 'screenMax' : 'screen';

    return (<>
        <div className={classNameLogic}>{props.display}</div>
        </>
    )
}
export default Screen