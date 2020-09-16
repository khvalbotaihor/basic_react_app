import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title:"input"
}

export const DefaultInput = () => <input/>
export const InputWithStaticValue = () => <input value={"It's a statis imput that can't be changed"} />

export const InputWithLocalState = () => {
const [inputValue, setInoutValue] = useState("");
const result = (el:ChangeEvent<HTMLInputElement>)=>{
    const enteredValue = el.currentTarget.value;
    setInoutValue(enteredValue);
};
    return (
        <><input onChange={result}/>
        the value is entered: {inputValue}
        </>
    )
}

export const InputWithRef = () => {
const [inputValue, setInoutValue] = useState("");
const refValue = useRef<HTMLInputElement>(null);
const result = ()=>{
    const enteredValue = refValue.current as HTMLInputElement;
    setInoutValue(enteredValue.value)
}

    return (
        <><input ref={refValue} />
        <button onClick={result}>Result</button>
            - {inputValue}
        </>
    )
}

