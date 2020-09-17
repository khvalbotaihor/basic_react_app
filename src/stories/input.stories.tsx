import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input"
}

export const DefaultInput = () => <input/>
export const InputWithDefaultValue = () => <input value={"It's an input with statis value that can't be changed"}/>
export const InputLocalState = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const result = (el: ChangeEvent<HTMLInputElement>) => {
        //console.log("Value was entered in input")
        const inputValue = el.currentTarget.value;
        setEnteredValue(inputValue);
        console.log("Added value is input")
    }
    return (
        <>  <input onChange={result}/>
            this is entered value:
            {enteredValue}
        </>
    )
}

export const InputWithRefs = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const res = () => {
        //console.log("Result was requested")
        const inputValue = inputRef.current as HTMLInputElement;
        setEnteredValue(inputValue.value);
        console.log("Result requested")
    }

    return (
        <>  <input ref={inputRef} id={"inputId"}/>
            <button
                onClick={res}
                /*        onClick={()=>{
                            console.log("Result")
                            const el = document.getElementById("inputId") as HTMLInputElement;
                            setEnteredValue(el.value)
                        }}*/
            >Result
            </button>
            this is entered value:
            {enteredValue}
        </>
    )
}


export const ControlledInput = () => {
    const [ControlledValue, setControlledValue] = useState("");
    const onChange = (el: ChangeEvent<HTMLInputElement>) => {
        const enteredValue = el.currentTarget.value;
        setControlledValue(enteredValue);
    };
    return (
        <input
            value={ControlledValue}
            onChange={onChange}
        />
    )
}

export const ControlledCheckbox = () => {

    const [ControlledValue, setControlledValue] = useState(true);
    const onChange = (el: ChangeEvent<HTMLInputElement>) => {
        const enteredValue = el.currentTarget.checked;
        setControlledValue(enteredValue);
    }

    return (

        <input type={"checkbox"} checked={ControlledValue} onChange={onChange}/>
    )
}

export const controlledSel = () => {
const[selectValue, setSelectValue] = useState();
 const onChange = (el:ChangeEvent<HTMLSelectElement>)=>{
             const selectedOption = el.currentTarget.value;
           setSelectValue(selectedOption);
         }

    return(
        <select value={selectValue} onChange={onChange}>
            <option >None</option>
            <option value="1">Moskva</option>
            <option value="2">Minsk</option>
            <option value="3">Kiev</option>
        </select>
    )
}


















































