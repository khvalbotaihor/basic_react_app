import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./Digital_Clock_4_0";
import {AnalogClockView} from "./Analog_Clock_4_0";

type PropsType = {
    mode: "digital" | "analog"
}

export const Clock_4_0: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("UseEffect works")

        const intervalId = setInterval(() => {
            console.log("SetInterval")
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

switch (props.mode) {
    case "analog":
        view = <AnalogClockView date={date} />
        break;
    case "digital":
    default:
        view = <DigitalClockView date={date} />
}



    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

