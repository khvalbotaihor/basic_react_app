import {reducer, StateType} from "./UncontrolledOnOff";

test("by default switch is on", ()=> {
const startSate:StateType = {
    on: true
}

const endState = reducer(startSate,{type: "on - true"})
expect(endState.on).toBe(true)

})

test("by default switch is off", ()=> {
const startSate:StateType = {
    on: false
}

const endState = reducer(startSate,{type: "on - false"})
expect(endState.on).toBe(false)

})

test("error is shown when fake acttion type was added", ()=> {
const startSate:StateType = {
    on: true
}
expect(()=>{
    reducer(startSate,{type: "Fake-Type"})

}).toThrowError();

})