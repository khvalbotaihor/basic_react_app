import React from "react";
import {ClockPropsType} from "./Clock_5_0";
import styles from './Analog_Clock.module.css'

export const AnalogClock: React.FC<ClockPropsType> = (props) => {

    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getHours() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return <>


        <div className={styles.clock}>
            <div className={styles["analog-clock"]}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle} />
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle} />
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle} />
            </div>
        </div>
    </>
}