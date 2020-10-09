import React, {useEffect, useState} from "react";
import {DigitalClock} from "./Digital_Clock_6_0";
import {AnalogClock} from "./Analog_Clock_6_0";

export type PropsType = {
    mode: "analog" | "digital"
}

export const Clock6_0: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    let view;

    switch (props.mode) {
        case "digital":
            view = <DigitalClock date={date}/>
            break;
        case "analog":
        default:
            view = <AnalogClock date={date}/>
    }

    return <>
        {view}
    </>
}

export type ClockType = {
    date: Date
}

