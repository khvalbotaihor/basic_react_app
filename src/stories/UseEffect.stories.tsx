import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect Demo"
}

export const Example1 = () =>{
    console.log("Example1 component is rendering");
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);


    useEffect(()=>{
        console.log("useEffect runs during every component rendering");
        document.title=counter.toString()
        // api.getUSers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = "User "
    })
    useEffect(()=>{
        console.log("useEffect runs during every Counter component rendering");
        document.title=counter.toString()
    },[counter])
    useEffect(()=>{
        console.log("useEffect runs one time");
        document.title=counter.toString()
    },[])

    return <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        { "Counter equals: " + counter}
        <div></div>
        <button onClick={()=> {setFake(fake+1)}}>+</button>
        { "Fake equals: " + fake}
    </>
}


export const SetTimeoutExample = () =>{
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("SetTimeoutExample component is rendering");


    useEffect(()=>{
        console.log("useEffect runs during every component rendering");
        document.title=counter.toString()
        // api.getUSers().then('')
        // setInterval
        // indexedDB
        // document.getElementId
        // document.title = "User "
    })


    return <>
        Hello, {counter} {fake}
        <button onClick={()=> {setFake(fake+1)}}>+</button>
        <div></div>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>

    </>
}