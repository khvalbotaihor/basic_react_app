
import React from "react";
import {Clock_4_0} from "./Clock_4_0";

export default {
    title: "Clock 4.0",
    component: Clock_4_0
}

export const BaseAnalogWxample = () =>{
    return <Clock_4_0 mode={"analog"} />
}
export const BaseDigitalWxample = () =>{
    return <Clock_4_0 mode={"digital"}/>
}