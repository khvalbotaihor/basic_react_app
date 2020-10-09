import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock_2_0: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date());


    useEffect(()=>{
       const intervalID = setInterval(()=>{
            console.log("tick")
            setDate(new Date())

        },1000)

        return ()=>{
            clearInterval(intervalID)
        }
    },[])

    const getFullView = (num:number) => num<10 ? "0"+num : num

    return <div>
        <span>{getFullView(date.getHours())}</span>
        :
        <span>{getFullView(date.getMinutes())}</span>
        :
        <span>{getFullView(date.getSeconds())}</span>
    </div>
}