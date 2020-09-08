import React from "react";
import {isBoolean} from "util";

type RatingPropsType ={
    value: 0|1|2|3|4|5
}

export function Rating(props:RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value>0}/>
            <Star selected={props.value>1}/>
            <Star selected={props.value>2}/>
            <Star selected={props.value>3}/>
            <Star selected={props.value>4}/>
        </div>
    )
}

type StarPropsType ={
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return (
        <span>{props.selected ? <b>star </b> : "star "}</span>
    )


    if(props.selected===true){
        return (
            <span><b>star</b> </span>
        )
    }else {
        return (
            <span>star </span>
        )
    }
}