import React from 'react';
import '../Buttons.css'

type PropsType = {
    title: string
    callBack: () => void
    disabled: boolean
}

const Button =(props: PropsType) => {


    return (
            <button onClick={props.callBack} disabled={props.disabled} className="button">{props.title}</button>
    )
}
export default Button