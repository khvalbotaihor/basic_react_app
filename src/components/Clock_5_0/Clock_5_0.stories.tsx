import React from "react";
import {Clock_5_0} from "./Clock_5_0";


export default {
    title: "Clock 5.0",
    component: Clock_5_0
}

export const DigitalClock = () => {

    return <Clock_5_0 mode={"digital"}/>
}
export const AnalogClock = () => {

    return <Clock_5_0 mode={"analog"}/>
}