import React from "react";

type OnOffPropsType = {
    //on: boolean
}

function OnOff(props:OnOffPropsType) {

    const on=false;

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
        <div style={OnStyle} onClick={()=>{alert("ON")}}>On</div>
        <div style={OffStyle} onClick={()=>{alert("OFF")}}>Off</div>
        <div style={IndicatorStyle} onClick={()=>{}}></div>
    </div>
)
}

export default OnOff;