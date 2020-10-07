import React, {useEffect, useMemo, useState} from "react";

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
        setInterval(() => {
            console.log("tick: " + counter)
            setCounter(state => state + 1)
        }, 1000)
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
        console.log("useEffect is rendering")
        /*    setTimeout(()=>{
                console.log("SetTimeout is rendring")
                document.title=counter.toString()

            }) */
        setInterval(() => {
//            console.log(clock)
            setClock(new Date())
        }, 1000)
    }, [])


    const get2DigitsString = (num: number) => { return num < 10 ? "0" + num : num};

    return <>

        <div>hours: {get2DigitsString(date.getHours())}</div>
        <div>minutes: {get2DigitsString(date.getMinutes())}</div>
        <div>seconds: {get2DigitsString(date.getSeconds())}</div>
    </>
}