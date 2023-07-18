import { useEffect, useState, } from 'react'
import './search.css'

function Search() {
    // const [count, setCount] = useState(0)
    let data = [
        { id: 1, name: "Lorem ipsum ", text: "something " },
        { id: 2, name: "explicabo mo", text: "something " },
        { id: 3, name: "eligendi vol", text: "something " },
        { id: 4, name: "Quia consequ", text: "something " },
        { id: 5, name: "exercitation", text: "something " },
        { id: 6, name: "dignissimos .", text: "something " },
        { id: 7, name: "dignissimos .", text: "something " },
        { id: 8, name: "dignissimos .", text: "something " },
        { id: 9, name: "dignissimos .", text: "something " },
        { id: 10, name: "dignissimos .", text: "something " },
        { id: 11, name: "dignissimos .", text: "something " },
        { id: 12, name: "dignissimos .", text: "something " },
        { id: 13, name: "dignissimos .", text: "something " },
        { id: 14, name: "dignissimos .", text: "something " },
        { id: 15, name: "dignissimos .", text: "something " },
        { id: 16, name: "dignissimos .", text: "something " },
        { id: 17, name: "dignissimos .", text: "something " },
        { id: 18, name: "dignissimos .", text: "something " },
        { id: 19, name: "dignissimos .", text: "something " },
        { id: 20, name: "dignissimos .", text: "something " },
        { id: 21, name: "dignissimos .", text: "something " },
        { id: 22, name: "dignissimos .", text: "something " },
        { id: 23, name: "dignissimos .", text: "something " },
        { id: 24, name: "dignissimos .", text: "something " },
        { id: 25, name: "dignissimos .", text: "something " },
        { id: 26, name: "dignissimos .", text: "something " },
        { id: 27, name: "dignissimos .", text: "something " },
        { id: 28, name: "dignissimos .", text: "something " },
        { id: 29, name: "dignissimos .", text: "something " },
        { id: 30, name: "dignissimos .", text: "something " },
        { id: 31, name: "dignissimos .", text: "something " },
        { id: 32, name: "dignissimos .", text: "something " },
    ]
    // let a = document.getElementsByClassName("typography")
    const [word, setWord] = useState("");
    const [search, setSearch] = useState(false);


    useEffect(() => {
        if (!word == "") {
            setSearch(true)
        }
    }, [word])
    console.log(search);
    return (
        <>
            <div className="home">
                <h1>App.jsx</h1>
                <input type="search" placeholder="Search..." onChange={(e) => setWord(e.target.value)} />
                {data.map((item) => {
                    if (search === false) {
                        return (
                            <h1 key={item.id}>{item.id}//{item.name}</h1>
                        )
                    } else if (item.name.toLowerCase().includes(word.toLowerCase())) {
                        return (
                            <h1 key={item.id} >{item.id} {item.name}</h1>
                        )
                    }
                    else if (String(item.id).toLowerCase().includes(word.toLowerCase())) {
                        return (
                            <h1 key={item.id} >{item.id} {item.name}</h1>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Search;


<i class="far fa-heart"></i>