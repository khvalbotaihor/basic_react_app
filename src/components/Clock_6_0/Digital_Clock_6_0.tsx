import React from "react";
import {ClockType} from "./Clock_6_0";

export const fullDate = (date: number) => date < 10 ? "0" + date : date


export const DigitalClock: React.FC<ClockType> = (props) => {

    return <>
        <span>{fullDate(props.date.getHours())}</span>
        :
        <span>{fullDate(props.date.getMinutes())}</span>
        :
        <span>{fullDate(props.date.getSeconds())}</span>
    </>
}