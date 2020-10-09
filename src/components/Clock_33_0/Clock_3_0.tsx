import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock_3_0:React.FC<PropsType> = () => {
const [date, setDate] = useState(new Date());

useEffect(()=>{
    const intervalId = setInterval(()=>{
        console.log("Tick")
        setDate(new Date())
    },1000)

    return ()=>{
        clearInterval(intervalId)
    }
})

    const showFullTime = (num: number) => num<10 ? "0"+num : num

    return <div>
        <span>{showFullTime(date.getHours())}</span>
        :
        <span>{showFullTime(date.getMinutes())}</span>
        :
        <span>{showFullTime(date.getSeconds())}</span>
    </div>
}