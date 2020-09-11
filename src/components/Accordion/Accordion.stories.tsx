import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion component",
    component: Accordion
}

const callback = "Uncontrolled accordion";

export const ExpandedAccordion = () =>
    <Accordion title={"Uncontrolled accordion"} collapsed={false} onClick={action(callback)} />
export const CollapsedAccordion = () =>
    <Accordion title={"Collapsed accordion"} collapsed={true} onClick={action(callback)} />
export const CollapseMode = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion title={"Controlled accordion"} collapsed={collapsed} onClick={setCollapsed} />
}