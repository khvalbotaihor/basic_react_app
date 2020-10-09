import React, {useEffect, useState} from "react";
import {DigitalClock} from "./Digital_Clock_5_0";
import {AnalogClock} from "./Analog_Clock_5_0";

type PropsType = {
    mode: "digital" | "analog"
}

export const Clock_5_0: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view;

    switch (props.mode) {
        case "digital":
            view = <DigitalClock date={date}/>
            break
        case "analog":
        default:
            view = <AnalogClock date={date}/>
    }

    return <div>  { view } </div>
}

export type ClockPropsType = {
    date: Date
}

