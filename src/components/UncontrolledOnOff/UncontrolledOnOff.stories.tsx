import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled OnOff component",
    component: UncontrolledOnOff
}

const input = () => <input/>

const callback = action("Button was clicked");

export const DefaultOn = () => <UncontrolledOnOff onChange={callback} />
export const DefaultOff = () => <UncontrolledOnOff  onChange={callback} />
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>

