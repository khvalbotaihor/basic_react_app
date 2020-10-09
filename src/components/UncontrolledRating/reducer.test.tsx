import {reducer} from "./UncontrolledRating";

test("no star should behighlighted", ()=>{
    const state = {
        value: 0
    }
    const endState = reducer(state, {type:0})

    expect(endState.value).toBe(0);
})
test("1 star should behighlighted", ()=>{
    const state = {
        value: 1
    }
    const endState = reducer(state, {type:1})

    expect(endState.value).toBe(1);
})
test("2 star should behighlighted", ()=>{
    const state = {
        value: 2
    }
    const endState = reducer(state, {type:2})

    expect(endState.value).toBe(2);
})
test("3 star should behighlighted", ()=>{
    const state = {
        value: 3
    }
    const endState = reducer(state, {type:3})

    expect(endState.value).toBe(3);
})
test("4 star should behighlighted", ()=>{
    const state = {
        value: 4
    }
    const endState = reducer(state, {type:4})

    expect(endState.value).toBe(4);
})
test("5 star should behighlighted", ()=>{
    const state = {
        value: 5
    }
    const endState = reducer(state, {type:5})

    expect(endState.value).toBe(5);
})
test("error should be shown in case of incorrect action type", ()=>{
    const state = {
        value: 0
    }
    expect(()=>{
        reducer(state, {type:6})
    }).toThrowError();

})
