import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock_2_0: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date());


    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())

        },1000)
    },[])

    const fullHours = date.getHours()<10 ? "0"+date.getHours() : date.getHours()
    const fullMinutes = date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes()
    const fullSeconds = date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds()

    return <div>
        <span>{fullHours}</span>
        :
        <span>{fullMinutes}</span>
        :
        <span>{fullSeconds}</span>
    </div>
}