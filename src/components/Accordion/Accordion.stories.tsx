import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'Accordion stories',
    component: Accordion
}
const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={false} onClick={callback} />
export const UsersUncollapsedMode = () => <Accordion title={"Users"} collapsed={true} onClick={callback} />
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion title={"Users"} collapsed={value} onClick={setValue} />
}








































