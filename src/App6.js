import React, { useState, useEffect } from 'react';

export default function JOkeFetcher() {
    const [norrisJokes, setNorrisJokes] = useState("");
    const [dadJoke, setDadJoke] = useState("")
    const [getNorris, setGetnorrid] = useState(false)

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(r => r.json())
            .then(d => setNorrisJokes(d.value))
    }, [getNorris])

    useEffect(() => {
        const clear = setInterval(() => {
            fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: 'text/plain'
                    //Accept: 'application/json'
                }
            })
                .then(r => r.text())
                .then(d => {
                    setDadJoke(d)
                })
        }, 10000)
        return () => clearInterval(clear)
    }, [])
    return (
        <div>
            <h2>JokesFetcher</h2>
            <button onClick={() => setGetnorrid(!getNorris)}>
                get new Norris Jokes
        </button>
            <p>{norrisJokes}</p>
            <h2>Show dad Jokes</h2>
            <p>{dadJoke}</p>
        </div>
    )
}

