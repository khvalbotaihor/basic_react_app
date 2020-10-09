import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
        console.log("UncontrolledAccordion rendering")

        //let [collapsed, setCollapsed] = useState(false);
        let [state, dispatch] = useReducer(reducer, {collapsed:false});

        return (
            <div>
                <AccordionTitle
                    title={props.title}
                    // onClick={() => { setCollapsed(!collapsed)      }}
                    onClick={() => {
                        dispatch({type: TOGGLE_COLLAPSED})
                    }}
                />


                {/*
            {!collapsed && <AccordionBody/>}
*/}
                {!state.collapsed && <AccordionBody/>}

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