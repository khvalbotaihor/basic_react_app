import React, {useMemo, useState} from "react";
import {log} from "util";

export default {
    title: "Use Memo"
}

export const ComponentWithReactMemo = () => {
const [a,setA] = useState(0);
const [b,setB] = useState(0);

let resultA = 1;
let resultB = 1;

resultA= useMemo(()=>{
let Result= 1;
    for (let i = 1; i<= a; i++){
        let fake=1;
        while (fake<100){
            fake=fake+1;
            console.log("fake equals:" + i + "___" +fake)
        }
        console.log("A is calculated")
        Result=Result *i;
    }

    return Result
},[a])


resultB= useMemo(()=>{
let Result= 1;
    for (let i = 1; i<= b; i++){
        console.log("B is calculated")
        Result=Result *i;
    }

    return Result
},[b])

    return <>
        <input value={a} onChange={(e)=>{setA(+e.currentTarget.value)}}/>
        <input value={b} onChange={(e)=>{setB(Number(e.currentTarget.value))}}/>
        <div>The result of A equals: {resultA}</div>
        <div>The result of B equals: {resultB}</div>
    
    </>
}



const Users = (props: { users: Array<string> }) => {
    console.log("User component is rendering")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const UsersRM = React.memo(Users);

export const ComponetWithReactMemoandUseMemo = () => {

    const [usersList, setUsersList] = useState<Array<string>>(["Carlo", "Vargas", "Lui"]);
    const [number, setNumber] = useState<number>(0);

    const addUser = () => {
        const newUsers = [...usersList, "Vika" + new Date().getTime()];
        setUsersList(newUsers);
    }

    const users = useMemo(()=>{
        const user = usersList.filter(u => u.toLowerCase().indexOf("a") > -1)

        return user
    },[usersList])


    return <>
        <button onClick={() => {      setNumber(number + 1) ;
            console.log("set number")
        }}>+ </button>

        <button onClick={() => {
            addUser();
            console.log("Add new user")
        }}>Add user</button>

        {number}
        <UsersRM users={users}/>
    </>
}