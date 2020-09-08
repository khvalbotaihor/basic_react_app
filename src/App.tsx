import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function sum(a:number,b:number) {
    alert(a+b)
}

/*sum(23,12);
sum(100,300)*/

//ето function declaration -спосіб створення функції
function App() {
    console.log("App rendering")
    //здесь функция может делать штото полезное
    // в конце функция обязана вернуть JSX

    return (
        <div className="App">
            <div>
                <AppTitle />
                <div>Article 1</div>
                <Rating value={3}/>
                <Accordion/>
                <div>Article2</div>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
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
