import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";

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

    let[ratingValue, setRatingValue]= useState<RatingValueType>(3);

    return (
        <div className="App">
            <div>

                <Rating value={ratingValue} onClick={setRatingValue}/>
{/*
                <Rating value={0} />
                <Rating value={1} />
                <Rating value={2} />
                <Rating value={3} />
                <Rating value={4} />
                <Rating value={5} />*/}


            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props:PageTitlePropsType) {
    console.log("App Title rendering")
return(
    <h1>{props.title}</h1>
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
