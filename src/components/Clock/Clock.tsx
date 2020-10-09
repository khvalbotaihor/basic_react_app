import React, {useEffect, useState} from "react";
import {DigitalClockView, get2DigitsString} from "./DigitalClock";
import {DigitalAnalogiew} from "./AnalogClock";

type PropsType = {
    mode?: "digital" | "analog"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        setInterval(() => {
            setDate(new Date())
        }, 1000)

    }, [])


    const secondsString = get2DigitsString(date.getSeconds())
    const minutesString = get2DigitsString(date.getMinutes())
    const hoursString = get2DigitsString(date.getHours())

    let View;

    switch (props.mode) {
        case "analog":
            View = <DigitalAnalogiew date={date}/>
            break;
        case "digital":
        default:
            View = <DigitalClockView date={date}/>
    }


    return <div>
        {View}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

