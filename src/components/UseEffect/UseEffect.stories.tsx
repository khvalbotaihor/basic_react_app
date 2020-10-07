import React, {useEffect, useState} from "react";

export default {
    title: "useEffect"
}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetTimeOut component is rendering")

    useEffect(()=>{

        console.log("useEffect is rendering")
    })

    setTimeout(()=>{
        debugger;
        document.title = counter.toString()

    },1000)


    return <>
        Hello, {counter} {fake}

        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>counter+
        </button>

    </>
}