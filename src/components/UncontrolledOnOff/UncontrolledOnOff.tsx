/*
import React, {useState} from "react";

type OnOffPropsType = {
    onChange : (on:boolean)=> void
    defaultOn : boolean
}

function UncontrolledOnOff(props:OnOffPropsType) {
    console.log("OnOffRendering")

    let[on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    console.log("On: " + on)

    const OnStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: on ? "green" : "white"
    }
    const OffStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: on ? "white" : "red"


    }
    const IndicatorStyle={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor: on ? "green" : "red"
    }

const onClicked=()=>{
    props.onChange(true)
    setOn(true)}
const offClicked =()=>{
    props.onChange(false)
    setOn(false)}

return(
    <div>
        <div style={OnStyle} onClick={onClicked}>On</div>
        <div style={OffStyle} onClick={offClicked}>Off</div>
        <div style={IndicatorStyle}></div>
    </div>
)
}

export default UncontrolledOnOff;*/



















































import React, {useReducer, useState} from "react";

type OnOffPropsType = {
    onChange : (on:boolean)=> void
}
type ActionType = {
    type: string
}

export type StateType = {
    on:boolean
}

export const reducer = (state: StateType, action:ActionType )=>{
switch (action.type) {
    case "on - true":
        return{
            ...state,
            on: true
        }
        case "on - false":
        return{
            ...state,
            on: false
        }
    default:
        throw new Error("Incorrect state type was selected")
}
}


function UncontrolledOnOff(props:OnOffPropsType) {
    console.log("OnOffRendering")

    let[state, dispatch] = useReducer(reducer, {on:false});

    console.log("On: " + state.on)

    const OnStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: state.on ? "green" : "white"
    }
    const OffStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: state.on ? "white" : "red"


    }
    const IndicatorStyle={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor: state.on ? "green" : "red"
    }

    const onClicked=()=>{
        props.onChange(true)
        //setOn(true)
        dispatch({type: "on - true"})

    }
    const offClicked =()=>{
        props.onChange(false)
        //setOn(false)
        dispatch({type: "on - false"})

    }

    return(
        <div>
            <div style={OnStyle} onClick={onClicked}>On</div>
            <div style={OffStyle} onClick={offClicked}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;