import React from 'react';
import './App.css';

function hello() {
    debugger;
    alert("Hello it kamasutra")
}

//hello();

//ето function declaration -спосіб створення функції
function App() {

    //здесь функция может делать штото полезное
    // в конце функция обязана вернуть JSX

    return (
        <div className="App">
            <div>This is App component
            <Rating />
            <Accordion />
            </div>
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

function Accordion() {
return(
    <div>
        <h3>Menu</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
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
