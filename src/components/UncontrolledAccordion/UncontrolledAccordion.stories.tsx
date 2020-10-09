import React from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled Accrodion component",
    component: UncontrolledAccordion
}

const callback = action("Accordion title was clicked");

export const ExpandedAccordion = () => <UncontrolledAccordion  title={"Expanded Accordion"} />
export const CollapsedAccordion = () => <UncontrolledAccordion title={"Collapsed Accordion"}/>
