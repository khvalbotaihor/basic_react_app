import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock09102020: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick")
            setDate(new Date())
        }, 1000)

        return ()=> {
            clearInterval(intervalId)
        }

    }, [])

    const get2String = (num: number) => num < 10 ? "0" + num : num;

    return <div>
        <span>{get2String(date.getHours())}</span>
        :
        <span>{get2String(date.getMinutes())}</span>
        :
        <span>{get2String(date.getSeconds())}</span>
    </div>
}