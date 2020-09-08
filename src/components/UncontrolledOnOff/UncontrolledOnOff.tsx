import React, {useState} from "react";

type OnOffPropsType = {
    onChange : (on:boolean)=> void
}

function UncontrolledOnOff(props:OnOffPropsType) {
    console.log("OnOffRendering")

    let[on, setOn] = useState(false);

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




return(
    <div>
        <div style={OnStyle} onClick={()=>{
            props.onChange(true)
            setOn(true)}}>On</div>
        <div style={OffStyle} onClick={()=>{
            props.onChange(false)
            setOn(false)}}>Off</div>
        <div style={IndicatorStyle} onClick={()=>{}}></div>
    </div>
)
}

export default UncontrolledOnOff;