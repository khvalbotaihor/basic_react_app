import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff component",
    component: OnOff
}

const callback = "Button clicked"

export const SwitchedOnButton = () => <OnOff on={true} setOn={action(callback)} />
export const SwitchedOffButton = () => <OnOff on={false} setOn={action(callback)} />
export const SwitchMode = () => {
    const[on, setOn] = useState(true);
    return <OnOff on={on} setOn={setOn} />
}