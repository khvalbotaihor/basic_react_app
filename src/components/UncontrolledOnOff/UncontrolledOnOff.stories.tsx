import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
}
const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = () => <UncontrolledOnOff onChange={x=>x} />








































