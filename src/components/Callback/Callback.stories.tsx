import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "Callback"
}

export const Callback = () => {

    // lexical enviroment

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Victor", "Kesha", "CArlo", "Alania"])

    const increaseCounter = () => {
        setCounter(counter + 1)
    };

    const filteredArray = useMemo(() => {
        const filtered = users.filter(u => u.toLowerCase().indexOf("v") > -1);
        return filtered

    }, [users])


    const addUsers = () => {
        const userList = [...users, "Vika" + new Date().getTime()];
        setUsers(userList);
    }
    const memoazedAddUser = useMemo(() => {
        return addUsers

    }, [users])

    const memoazedAddUser2 = useMemo(() => {
        return () => {
            const userList = [...users, "Vika" + new Date().getTime()]
            setUsers(userList)
        }

    }, [users])
// lexical enviroment takes takes lexical enviroment of it's
    const memoazedAddUser3 = useCallback(() => {
            const userList = [...users, "Vika" + new Date().getTime()]
            setUsers(userList)
    }, [users])

    return <>
        <button onClick={increaseCounter}>+</button>
        < Counter counter={counter}/>
        <Users users={filteredArray} addUsers={memoazedAddUser3}/>
    </>
}

const SecretCounter = (props: { counter: number }) => {
    console.log("Counter is rendering")

    return <div>{" Counter value equals: " + props.counter}</div>

}

const Counter = React.memo(SecretCounter)

type SecretUsersPropsType = {
    users: string[],
    addUsers: () => void
}

const SecretUsers = (props: SecretUsersPropsType) => {
    console.log("Secret users is rendering")

    return <>
        <button onClick={props.addUsers}>Add users</button>

        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
    </>
}

const Users = React.memo(SecretUsers);