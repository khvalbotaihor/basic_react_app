import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (value:boolean)=> void
}

export function OnOff(props:OnOffPropsType) {
    console.log("OnOffRendering")

    const OnStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: props.on ? "green" : "white"
    }
    const OffStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"5px",
        backgroundColor: props.on ? "white" : "red"


    }
    const IndicatorStyle={
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor: props.on ? "green" : "red"
    }


return(
    <div>
        <div style={OnStyle} onClick={()=>{
            props.setOn(true)}}>On</div>
        <div style={OffStyle} onClick={()=>{
            props.setOn(false)}}>Off</div>
        <div style={IndicatorStyle} onClick={()=>{}}></div>
    </div>
)
}