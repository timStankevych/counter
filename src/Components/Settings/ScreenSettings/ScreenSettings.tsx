import React from 'react';
import './ScreenSettings.css'

type PropsType = {
    Min: (value: number) => void
    Max: (value: number) => void
}

const ScreenSettings = (props: PropsType) => {
   let maxCountElement = React.createRef<HTMLInputElement>()
   let minCountElement = React.createRef<HTMLInputElement>()


   let maxCountChange = () => {
       let max = maxCountElement.current ? Number(maxCountElement.current.value) : 1
       props.Max(max);
   };
   let minCountChange =() => {
       let min = minCountElement.current ? Number(minCountElement.current.value) : 0
       props.Min(min);

   }

    return (
        <div>
            <div>max value:<input type="number" ref={maxCountElement} onChange={maxCountChange}/></div>
            <div>min value:<input type="number" ref={minCountElement} onChange={minCountChange}/></div>
        </div>
    )
}
export default ScreenSettings