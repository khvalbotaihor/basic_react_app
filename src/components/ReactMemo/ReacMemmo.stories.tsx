import React, {useState} from "react";

export default {
    title: "Components with React Memo"
}

const Users = (props: { users: Array<string> }) => {
    console.log("User component is rendering")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const UsersRM = React.memo(Users);

const Counter = (props: { counter: number }) => {
    console.log("Counter component is rendering")
    return <div>{props.counter}</div>
}
const CounerRM = React.memo(Counter);

export const Generalcomponent = () => {

    const addUser = () => {
        const newUsers = [...usersList, input];
        setUsersList(newUsers);
    }

    const [usersList, setUsersList] = useState<Array<string>>(["Carlo", "Vargas", "Lui"]);
    const [number, setNumber] = useState<number>(0);
    let input= "";

    return <>
        <button onClick={() => {
            setNumber(number + 1)
        }}>+
        </button>
        <input defaultValue={input} onChange={(e) => {
            input = e.currentTarget.value;

        }
        }/>

        <button onClick={() => {
            addUser()
        }}>Add user
        </button>

        <CounerRM counter={number}/>
        <UsersRM users={usersList}/>
    </>
}