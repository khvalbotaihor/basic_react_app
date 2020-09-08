import React from "react";

type AccordionPropsType = {
    title:string
    //collapsed: boolean
}

function UncontrolledAccordion(props:AccordionPropsType) {
    console.log("Accordion rendering")

    const collapsed=true;
// add useState and add onClick function
        return (
            <div>
                <AccordionTitle title={props.title}/><button>Toggle</button>
                {!collapsed && <AccordionBody />}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return(
        <h3>{props.title}</h3>
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