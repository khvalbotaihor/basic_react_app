import React, {useMemo, useState} from "react";

export default {
    title: "Use Memo"
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {

        let tempResultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;
        }
        return resultA;

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>


    </>

}


const Users = (props: { users: Array<string> }) => {
    console.log("User component is rendering")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const UsersRM = React.memo(Users);

export const HelpsForReactMemoExample = () => {
    console.log("HelpsForReactMemoExample rendering");

    const [usersList, setUsersList] = useState<Array<string>>(["Dimich", "Valera", "Artem", "Katya"]);
    const [number, setNumber] = useState<number>(0);

    const newArray = useMemo(() => {
        const newArray = usersList.filter(u => u.toLowerCase().indexOf("a") > -1);
    return newArray;
}, [usersList])

    const addUser = () => {
        const newUsers = [...usersList, "Sveta" + new Date().getTime()];
        setUsersList(newUsers);
    }

return <>
    <button onClick={() => {        setNumber(number + 1)    }}>+    </button>
    <button onClick={() => {        addUser()    }}>add user    </button>


    {number}
    <UsersRM users={newArray}/>
</>
}