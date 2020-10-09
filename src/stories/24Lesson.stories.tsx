import React, {useEffect, useState} from "react";

export default {
    title: "24 Lesson"
}

export const ResetEffectExample = () =>{
const [counter, setCounter] = useState(1);

    console.log("SetTimeoutExample")

    useEffect(()=>{
        console.log("Effecr occured")

    })

    return <>
        Hello, counter: {counter} <button onClick={()=>{setCounter(counter+1)}}>+</button>


    </>
}