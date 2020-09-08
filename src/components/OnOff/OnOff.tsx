import React from "react";

type OnOffPropsType = {
    on: boolean
}

function OnOff(props:OnOffPropsType) {

    const OnStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"3px",
        backgroundColor: props.on ? "green" : "white"
    }
    const OffStyle={
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        marginRight:"3px",
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
        <div style={OnStyle}>On</div>
        <div style={OffStyle}>Off</div>
        <div style={IndicatorStyle}></div>
    </div>
)
}

export default OnOff;