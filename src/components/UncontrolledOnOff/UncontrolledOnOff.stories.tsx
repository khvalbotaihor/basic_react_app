import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "Uncontrolled OnOff",
    component: UncontrolledOnOff
}

const callback= "Clisked OnOff component";

export const OnMode = () =>  <UncontrolledOnOff defaultOn={true} onChange={action(callback)} />
export const OffMode = () =>  <UncontrolledOnOff defaultOn={false} onChange={action(callback)} />
export const BugMode = () =>  <div>Unsync when change default value when already rendered</div>