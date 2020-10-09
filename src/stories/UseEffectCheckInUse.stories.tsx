import React, {useEffect, useState} from "react";
import {log} from "util";

export default {
    title: "Check useEffect side effects"
}

export const BaseExaple = () =>{
const [counter, setCounter]  = useState(1);
const [fake, setFake]  = useState(1);

/*useEffect(()=>{
console.log("useEffect is rendering")

        setInterval(()=>{
        console.log("SetInterval is rendering and counter equals: " + counter )
        setCounter(state => state+1)


    },1000)



    /!*    setTimeout(()=>{
        console.log("SetTimeOut is rendering")
        document.title=counter.toString()



    },1000)*!/

},[])*/



    return <>
    Hello counter: {counter}
    <div></div>
        fake: {fake}
    <div></div>
    <button onClick={()=>{setCounter(counter+1)}}>counter+</button>
    <button onClick={()=>{setFake(fake+1)}}>fake+</button>

    </>
}