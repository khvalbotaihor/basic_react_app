import React, {useMemo, useState} from "react";

export default {
    title: "Use Memo Component"
}

export const NewComponent = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 1;
            while (fake < 100) {
                fake++;
                console.log("Fake equals:" + fake);
                const Mat = Math.random();
            }
            result = result * i;
        }
        return result
    }, [a])

    resultB = useMemo(() => {
        let result = 1;
        for (let i = 1; i <= b; i++) {

            result = result * i;
            console.log("Result b:" + i)
        }
        return result
    }, [b])

    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }}/>
        <div>The result of A equals: {resultA}</div>
        <div>The result of B equals: {resultB}</div>
    </>
}


const Users = (props: { users: Array<string> }) => {
    console.log("User component is rendering")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const UsersRM = React.memo(Users);

export const Generalcomponent = () => {

    const addUser = () => {
        const newUsers = [...usersList, input];
        setUsersList(newUsers);
    }

    const [usersList, setUsersList] = useState<Array<string>>(["Carlo", "Vargas", "Lui"]);
    const [number, setNumber] = useState<number>(0);
    let input = "";

const filteredUsersList = useMemo(()=>{
    const users = usersList.filter(u=> u.toLowerCase().indexOf("a") > -1);
    return users
},[usersList])




    return <>
        <button onClick={() => {
            setNumber(number + 1)
            console.log("Counter is rendering")
        }}>+
        </button>
        <div></div>
        {number}

        <div></div>
        <input defaultValue={input} onChange={(e) => {
            input = e.currentTarget.value;
        }}/>

        <button onClick={() => {
            addUser()
        }}>Add user
        </button>
        <div></div>
        <UsersRM users={filteredUsersList}/>
    </>
}





















