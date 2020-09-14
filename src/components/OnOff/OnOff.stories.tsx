import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff component",
    component: OnOff
}

const callback = action("OnOff component button was clicked")

export const SwitchedOn = () => <OnOff on={true} setOn={callback} />
export const SwitchedOff = () => <OnOff on={false} setOn={callback} />
export const SwitchMode = () =>
{
    const[OnOffValue, setOnOffValue] = useState(true);
    return <OnOff on={OnOffValue} setOn={setOnOffValue} />
}


