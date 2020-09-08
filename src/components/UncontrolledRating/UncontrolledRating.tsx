import React, {useState} from "react";
import {isBoolean} from "util";

type RatingPropsType ={
    //value: 0|1|2|3|4|5
}

export function UncontrolledRating(props:RatingPropsType) {
    console.log("Rating rendering")
let[value, setValue] = useState<number>(0);

    // delete buttons and make clicks on stars

    return (
        <div>
            <Star selected={value>0} setValue={setValue} value={1}/>
            <Star selected={value>1} setValue={setValue} value={2}/>
            <Star selected={value>2} setValue={setValue} value={3}/>
            <Star selected={value>3} setValue={setValue} value={4}/>
            <Star selected={value>4} setValue={setValue} value={5}/>
        </div>
    )
}

type StarPropsType ={
    selected: boolean
    value: number
    setValue: (value:number)=> void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return (
        <span onClick={()=>{props.setValue(props.value)}}>{props.selected ? <b>star</b> : "star" }</span>
    )
}