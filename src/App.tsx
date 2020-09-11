import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum(23,12);
sum(100,300)*/

//ето function declaration -спосіб створення функції
function App() {
    console.log("App rendering")
    //здесь функция может делать штото полезное
    // в конце функция обязана вернуть JSX

    let[ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let[accordionValue, setAccordionValue] = useState(false);
    let[on, setOn] = useState<boolean>(false);

    return (
        <div className="App">
            <div>

                <Accordion title={"Controlled accordion"}
                           collapsed={accordionValue}
                           onClick={setAccordionValue}/>
                <OnOff on={on} setOn={setOn}/>
                <Rating value={ratingValue} onClick={setRatingValue}/>

                <UncontrolledAccordion title={"Menu"} />
                <UncontrolledOnOff onChange={setOn}/> {on.toString()}
                <UncontrolledRating/>



            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("App Title rendering")
    return (
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
