import React from 'react';
import './App.css';
import GreetingsComponent from './GreetingsComponent';



function App() {

    const  nameList:string [] = ["Sebastian W.", "Ilker" ,"Sebastian T." ]

    const greetingComponentMap = nameList.map(
        (nameFromNameList) => {
        return <GreetingsComponent name = {nameFromNameList}/>
        }
    );
    return (
        <div className="App">
            {greetingComponentMap}

        </div>
    );
}

export default App;
