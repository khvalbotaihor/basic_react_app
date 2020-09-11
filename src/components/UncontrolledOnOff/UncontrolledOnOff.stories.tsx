import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled OnOff",
    component: UncontrolledOnOff
}

const callback = action("Button was clicked")

export const OnSwitched = () => <UncontrolledOnOff defaultOn={true} onChange={callback} />
export const OffSwitched = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />