import React from "react";
import {Clock6_0} from "./Clock_6_0";

export default {
    title : "Clock 6.0",
    component: Clock6_0
}

export  const AnalogClock = () =>{

    return <Clock6_0 mode={"analog"}/>
}
export  const DigitalClock = () =>{

    return <Clock6_0 mode={"digital"}/>
}