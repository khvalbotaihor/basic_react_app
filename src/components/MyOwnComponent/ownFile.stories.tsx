import React, {useState} from "react";

export default {
    title: "My own react memo"
}

const Useroc = (props: { users: Array<string> }) => {
    console.log("useroc is rendering")
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}

    </div>
}

const MemorisedUseroc = React.memo(Useroc);

const Number = (props: { counter: number }) => {
    return (
        <div>{props.counter}</div>
    )
}
const MemomizedNumber = React.memo(Number);


export const exapmple2 = () => {

    const [users, setUsers] = useState(["Vala", "Kostia", "Dann Ballan"]);
    const [counteroc, setCounteroc] = useState(0);
    const addUser = () => {
        const newUser = [...users, "Vika"+ " "+ new Date().getTime()];
        console.log(newUser)

        setUsers(newUser);
    }
    return <>
        <button onClick={() => {
            setCounteroc(counteroc + 1);
            console.log(counteroc+1)
        }}>+
        </button>

        <button onClick={ addUser }>Add user</button>

        <MemomizedNumber counter={counteroc}/>
        <MemorisedUseroc users={users}/>
    </>
}