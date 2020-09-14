import React from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled Accrodion component",
    component: UncontrolledAccordion
}

const callback = action("Accordion title was clicked");

export const ExpandedAccordion = () => <UncontrolledAccordion collapsed={false} title={"Expanded Accordion"} onChange={callback}/>
export const CollapsedAccordion = () => <UncontrolledAccordion collapsed={true} title={"Collapsed Accordion"} onChange={callback}/>
