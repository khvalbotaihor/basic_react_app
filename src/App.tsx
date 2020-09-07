import React from 'react';
import logo from './logo.svg';
import './App.css';

//ето function declaration -спосіб створення функції
function App() {

    //здесь функция может делать штото полезное
    // в конце функция обязана вернуть JSX

    return (
        <div className="App">
            <div>This is App component</div>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <div>star </div>
            <div>star </div>
            <div>star </div>
            <div>star </div>
            <div>star </div>
        </div>
    )
}


//function expression
const App2 = function () {
    return (
        <div className="App">
            <div>This is App component</div>
        </div>
    );
}

//стрелочная функция
const App3 = () => {
    return (
        <div className="App">
            <div>This is App component</div>
        </div>
    );
}

export default App;
