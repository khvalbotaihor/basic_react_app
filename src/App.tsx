import React from 'react';
import './App.css';

function hello() {
    debugger;
    alert("Hello it kamasutra")
}

//hello();

//ето function declaration -спосіб створення функції
function App() {
    console.log("App rendering")
    //здесь функция может делать штото полезное
    // в конце функция обязана вернуть JSX

    return (
        <div className="App">
            <div>
                <AppTitle />
                <Rating/>
                <Accordion/>
                <Rating/>
            </div>
        </div>
    );
}
function AppTitle() {
    console.log("App Title rendering")
return(
    <>This is App component</>
)
}

function Rating() {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>star </div>
    )
}

function Accordion() {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    )
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
return(
    <h3>Menu</h3>
)
}
function AccordionBody() {
    console.log("AccordionBody rendering")
return(
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
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
