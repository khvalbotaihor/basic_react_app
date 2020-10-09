import React, {useEffect, useMemo, useState} from "react";
import {Clock} from "../components/Clock/Clock";

export default {
    title: "UseState Demo"
}

export const Example1 = () => {
    console.log("Example1 component is rendering");

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log("useEffect is rendering")

        /*    setTimeout(()=>{
                console.log("SetTimeout is rendring")
                document.title=counter.toString()

            }) */
        const intercvald = setInterval(() => {
            console.log("tick: " + counter)
            setCounter(state => state + 1)
        }, 1000)

        return ()=>{
            clearInterval(intercvald)
        }
    }, [])


    return <>
        Counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

        <div></div>
        Fake: {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>+
        </button>
    </>
}
export const Example2 = () => {
    console.log("Example2 component is rendering");

    const [date, setClock] = useState(new Date())

    useEffect(() => {

        const intervalId= setInterval(() => {
            console.log("Tick")
            setClock(new Date())
        }, 1000)

        return ()=>{
            debugger;
            clearInterval(intervalId)
        }

    }, [])


    const get2DigitsString = (num: number) => { return num < 10 ? "0" + num : num};

    return <>

        <div>hours: {get2DigitsString(date.getHours())}</div>
        <div>minutes: {get2DigitsString(date.getMinutes())}</div>
        <div>seconds: {get2DigitsString(date.getSeconds())}</div>

        <Clock />
    </>
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log("Component rendered")

    useEffect(() => {

        console.log("Effect occurred: " + counter)

        return ()=>{
            console.log("RESET EFFECT: " + counter)
        }


    },[counter])

    const increase = ()=> {setCounter(counter+1)};

    return <>

        Hello, counter: {counter}
        <button onClick={increase}>+</button>

    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState("");

    console.log("Component rendered with " + text)

    useEffect(() => {

        window.document.addEventListener('keypress', (e)=>{
            console.log(e.key);
            setText(()=> text + e.key)
        })



    },[text])


    return <>

        Typed text: {text}


    </>
}