import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    title: string
}

type ActionType = {
    type:string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE_COLLAPSED";

export const reducer = (state: StateType, action:ActionType) : StateType=>{
switch (action.type) {
    case TOGGLE_COLLAPSED:
        return{
            ...state,
            collapsed: !state.collapsed
        }
    default:
        throw new Error("Incorrect action type was added")
}


}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    //let[collapsed,setCollapsed]= useState(false);
    let[collapsed,dispatch]= useReducer(reducer, {collapsed:false});

    return (
        <div>
            <AccordionTitle
                title={props.title}
                //onClick={() => {setCollapsed(!collapsed)}}
                onClick={() => {
                    dispatch({type:TOGGLE_COLLAPSED})}}
            />

{/*
            {!collapsed && <AccordionBody/>}
*/}
            {!collapsed.collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;