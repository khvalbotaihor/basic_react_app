import React from "react";
import {ClockPropsType} from "./Clock_5_0";

export const normalTime = (time: number) => time < 10 ? "0" + time : time


export const DigitalClock: React.FC<ClockPropsType> = (props) => {

    return <>
        <span>{normalTime(props.date.getHours())}</span>
        :
        <span>{normalTime(props.date.getMinutes())}</span>
        :
        <span>{normalTime(props.date.getSeconds())}</span>
    </>
}