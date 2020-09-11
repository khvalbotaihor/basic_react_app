import React from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled Accordion",
    component: UncontrolledAccordion
}

const callbak = action("Title was clicked")

export const OnMode = () =>
    <UncontrolledAccordion
        defaultValue= {false}
        title={"Uncontrolled accordion title"}
    onClick={callbak}
    />
export const OffMode = () =>
    <UncontrolledAccordion
        defaultValue= {true}
        title={"Uncontrolled accordion title"}
        onClick={callbak}
    />