import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "Use Callback Component"
}


export const LikeUseCallback = () => {
    const [books, setBooks] = useState<Array<string>>(["React", "JS", "CSS", "HTML", "Angular"]);
    const [number, setNumber] = useState<number>(0);
    let input = "";

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newUsers = [...books, input];
            setBooks(newUsers)
        }
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newUsers = [...books, input];
        setBooks(newUsers)
    }, [books]);


    const newArray = useMemo(() => {
        const users = books.filter(u => u.toLowerCase().indexOf("a") > -1);
        return users
    }, [books])


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

        <div></div>

        <Book books={newArray} addBook={memoizedAddBook2}/>

    </>
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log("Books component is rendering")
    return <div>
        <button onClick={() => {  props.addBook() }}>Add book  </button>


        {props.books.map((book, i) => <div key={i}>{book}</div>)}

    </div>
}

const Book = React.memo(BooksSecret);