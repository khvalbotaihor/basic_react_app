import React from "react";
import {ClockViewPropsType} from "./Clock_4_0";

export const fullTime = (date: number) => date < 10 ? "0" + date : date


export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{fullTime(date.getHours())}</span>
        :
        <span>{fullTime(date.getMinutes())}</span>
        :
        <span>{fullTime(date.getSeconds())}</span>
    </>
}