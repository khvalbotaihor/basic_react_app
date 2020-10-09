import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "Memoazed component"
}

export const MemoizedComponent = () => {
    const [counter, setCounter] = useState(0);

    const [users, setUsers] = useState(["Victor", "Alia", "Arny", "Lucy"]);

    const increaseCounter = () => {
        console.log("Counter is rendering")
        setCounter(counter + 1);
    }
    let filteredArray = users.filter(u => u.toLowerCase().indexOf("v") > -1)

    const addUser = () => {
        const newUsers = [...users, "Vikas" + new Date().getTime()];
        setUsers(newUsers)

    };


    const memoazedFunction = useMemo(() => {
        return addUser

    }, [users])

        const memoazedFunction2 = useMemo(() => {
            return () => {
                let newUsers = [...users, "Vikas" + new Date().getTime()]
                setUsers(newUsers)
            }
        }, [users])

        const memoazedFunction3 = useCallback(() => {
            let newUsers = [...users, "Vikas" + new Date().getTime()]
            setUsers(newUsers)
        }, [users])


    return <>
        <button onClick={increaseCounter}>+</button>
        <div>{" Counter value equals: " + counter}</div>
        <Users users={filteredArray} addUser={memoazedFunction3}/>
    </>
}

type SercetUsersPropsType = {
    users: string[],
    addUser: () => void
}

const SecretUsers = (props: SercetUsersPropsType) => {
    console.log("Secret component is rendering");

    return <>
        <button onClick={() => {
            props.addUser()
        }}>Add user
        </button>

        <div>{props.users.map((u, i) => <div key={i}>{u}</div>)

        }</div>


    </>
}

const Users = React.memo(SecretUsers);