import React, {useState} from "react";

type AccordionPropsType = {
    title:string
    //collapsed: boolean
}

function UncontrolledAccordion(props:AccordionPropsType) {
    console.log("Accordion rendering")

    let[collapsed,setCollapsed]= useState<boolean>(false);
// add useState and add onClick function

    // delete buttons and click on title and use callback

        return (
            <div>
                <AccordionTitle
                    title={props.title}
                    setCollapsed = {setCollapsed}
                    collapsed={collapsed}
                />
                {!collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value:boolean)=> void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <h3 onClick={()=>{props.setCollapsed(props.collapsed)}}>{props.title}</h3>
    )
}
function AccordionBody() {
    console.log("AccordionBody rendering")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;