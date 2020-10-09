/*import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType ={
    defaultValue? : RatingValueType
    onChange: (value:RatingValueType)=> void
}

export function UncontrolledRating(props:RatingPropsType) {
    console.log("Rating rendering")
let[value, setValue] = useState<RatingValueType>( props.defaultValue ? props.defaultValue : 0);


    return (
        <div>
            <Star selected={value>0} setValue={()=>{setValue(1); props.onChange(1)}}/>
            <Star selected={value>1} setValue={()=>{setValue(2); props.onChange(2)}}/>
            <Star selected={value>2} setValue={()=>{setValue(3); props.onChange(3)}}/>
            <Star selected={value>3} setValue={()=>{setValue(4); props.onChange(4)}}/>
            <Star selected={value>4} setValue={()=>{setValue(5); props.onChange(5)}}/>
        </div>
    )
}

type StarPropsType ={
    selected: boolean
    setValue: ()=> void
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return (
        <span onClick={()=>{props.setValue()}}>{props.selected ? <b>star </b> : "star " }</span>
    )
}*/



















import React, {useReducer, useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType ={
    defaultValue? : RatingValueType
    onChange: (value:RatingValueType)=> void
}

type ActionType = {
    type: number
}
type StateType = {
    value: number
}


export const reducer = (state: StateType, action: ActionType) => {
switch (action.type) {

    case 0:
        return {
            ...state,
            value: state.value=0
        }
        case 1:
        return {
            ...state,
            value: state.value=1
        }
        case 2:
        return {
            ...state,
            value: state.value=2
        }
        case 3:
        return {
            ...state,
            value: state.value=3
        }
        case 4:
        return {
            ...state,
            value: state.value=4
        }
        case 5:
        return {
            ...state,
            value: state.value=5
        }

    default:
        throw new Error("Incorrect acion type was added")
}


}

export function UncontrolledRating(props:RatingPropsType) {
    console.log("Rating rendering")
let[state, dispatch] = useReducer(reducer, {value:0});


    return (
        <div>
            <Star selected={state.value>0} setValue={()=>{dispatch({type:1})}}/>
            <Star selected={state.value>1} setValue={()=>{dispatch({type:2})}}/>
            <Star selected={state.value>2} setValue={()=>{dispatch({type:3})}}/>
            <Star selected={state.value>3} setValue={()=>{dispatch({type:4})}}/>
            <Star selected={state.value>4} setValue={()=>{dispatch({type:5})}}/>
        </div>
    )
}

type StarPropsType ={
    selected: boolean
    setValue: ()=> void
    defaultValue?: number
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return (
        <span onClick={()=>{props.setValue()}}>{props.selected ? <b>star </b> : "star " }</span>
    )
}
