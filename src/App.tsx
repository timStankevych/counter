import React from 'react';
import Counter from './Components/Counter/Counter';
import Settings from './Components/Settings/Settings';
import cl from './App.module.css'




const App = () => {
    return (
        <div className={cl.App}>
            <Settings/>
            <Counter/>
        </div>
    )
}
export default App