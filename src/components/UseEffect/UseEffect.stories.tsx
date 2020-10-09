import React, {useEffect, useState} from "react";

export default {
    title: "useEffect"
}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log("SetTimeOut component is rendering")

    useEffect(()=>{
/*
        setInterval(()=>{
            console.log("tick: " + counter)
            setCounter(state=> state+1)
        },1000)*/

    },[])




    return <>
        Hello,counter: {counter} - fake: {fake}


    </>
}