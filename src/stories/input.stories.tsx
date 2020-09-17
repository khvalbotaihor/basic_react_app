import React, {ChangeEvent, useRef, useState} from "react";
import {log} from "util";
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

/*
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");
const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const el = e.currentTarget.value;
    console.log(el);
   setParentValue(el);
}
    return <input value={parentValue} onChange={ onChange   }/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const el = e.currentTarget.checked;
        setParentValue(el);
    }

    return <input type={"checkbox"} checked={parentValue} onChange={ onChange  }/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2");
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        const el = e.currentTarget.value;
        setParentValue(el);
    }

    return <select value={parentValue} onChange={onChange}>
        <option value={1}>none</option>
        <option value={2}>Minsk</option>
        <option value={3}>Kiev</option>
    </select>
}

*/


export const ControlledInput = () => {
    const [controlledValue, setControlledValue] = useState("");
    const onChange = (el: ChangeEvent<HTMLInputElement>) => {
        const enteredValue = el.currentTarget.value;
        setControlledValue(enteredValue);
    }
    return (
        <input
            value={controlledValue}
            onChange={onChange}
        />
    )
}

export const ControlledCheckbox = () => {
    const [checkValue, setCheckValue] = useState(true);
    return(
        <input
            type="checkbox"
        checked={checkValue}
            onChange={(el)=>{
                const checkValue = el.currentTarget.checked;
                setCheckValue(checkValue);
            }}
        />
    )
}


































































