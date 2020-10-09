import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseСallback component"
}

export const UseCallbackComponent = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState(["Victor", "Taras", "Carlos", "Vanessy"]);


    const increaseCounter = () => {
        setCounter(counter + 1)
        console.log("Counter is rendering")
    };

    const filteredList = useMemo(() => {
        const newUser = users.filter(u => u.toLowerCase().indexOf("v") > -1)
        return newUser;
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, "Vika" + new Date().getTime()]
        setUsers(newUsers);
    }

    const memoazedAddingUser = useMemo(()=>{
        return addUser
    },[users])

    const memoazedAddingUser2 = useMemo(()=>{
        return () => {
            const newUsers = [...users, "Vika" + new Date().getTime()]
            setUsers(newUsers);
        }
    },[users])

    const memoazedAddingUser3 = useCallback(()=>{
            const newUsers = [...users, "Vika" + new Date().getTime()]
            setUsers(newUsers);
    },[users])


    console.log("Main component is rendering")
    return <>
        <button onClick={increaseCounter}>+</button>
        {"  number equals: " + counter}

        < User users={filteredList} addUser={memoazedAddingUser3}/>


    </>
}

type SecretUsersPropsType = {
    users: string[], addUser: ()=> void
}

const SecretUsers = (props: SecretUsersPropsType) => {
    console.log("Secrec users component is rendering")
    return <>

        <button onClick={props.addUser}>Add user</button>


        <div>{props.users.map((u, i) =>

            <div key={i}>{u}</div>
        )}</div>

    </>
}
const User = React.memo(SecretUsers)