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

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}