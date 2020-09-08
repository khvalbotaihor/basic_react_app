import React from "react";

type AccordionPropsType = {
    title:string
    collapsed: boolean
    onClick: (value:boolean)=> void
}

function Accordion(props:AccordionPropsType) {
    console.log("Accordion rendering")

        return (
            <div>
                <AccordionTitle
                    onClick={props.onClick}
                    title={props.title}
                    collapsed={props.collapsed}
                />
                {!props.collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (value:boolean)=> void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>
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

export default Accordion;