import React from "react";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: "Uncontrolled Accordion",
    component: UncontrolledAccordion
}

export const NotControlledAccordionTrue = () => <UncontrolledAccordion defaultValue={true} title={"Not controlled accodrdion"} />
export const NotControlledAccordionFalse = () => <UncontrolledAccordion defaultValue={false} title={"Not controlled accodrdion"} />