import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled OnOff component",
    component: UncontrolledOnOff
}

const callback = action("Button was clicked");

export const DefaultOn = () => <UncontrolledOnOff defaultValue={true} onChange={callback} />
export const DefaultOff = () => <UncontrolledOnOff defaultValue={false} onChange={callback} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

