import React, {useState} from 'react';
import {OnOff} from "../components/OnOff/OnOff";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
  title: 'input',
  //component: OnOff
};

export const UncontrolledInput = () => <input      />

export const TrackedValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  return <><input onChange={(event)=>{    const actualValue = event.currentTarget.value;  setValue(actualValue); }}     /> - {value}  </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  return <><input    /> <button onClick={()=> {setValue("yo")}}>Save</button> actual value: {value}  </>
}



export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}     />




