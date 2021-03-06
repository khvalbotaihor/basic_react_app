import {reducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

test("collapsed should be true", ()=> {
    const state : StateType = {
        collapsed: false
    }
    const endState = reducer(state,{type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBe(true);


})
test("collapsed should be false", ()=> {
    const state : StateType = {
        collapsed: true
    }
    const endState = reducer(state,{type: TOGGLE_COLLAPSED})

    expect(endState.collapsed).toBe(false);


})
test("collapsed should be true", ()=> {
    const state : StateType = {
        collapsed: false
    }
    expect(()=>{
        reducer(state,{type: "FakeType"})

    }).toThrowError();
})