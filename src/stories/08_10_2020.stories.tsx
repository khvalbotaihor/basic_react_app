import React, {useEffect, useState} from "react";

export default {
    title: "08 10 2020"
}

export const MainFeature = () => {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval is rendering " + date)
            setDate(new Date())
        }, 1000)


        return ()=>{
            clearInterval(intervalId)
        }

    }, [])

    const funca = (num: number) => {
        return num < 10 ? "0" + num : num
    }


    return <>
        {funca(date.getHours())}: {funca(date.getMinutes())}: {funca(date.getSeconds())}

    </>
}