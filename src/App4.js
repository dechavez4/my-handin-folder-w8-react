import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    function upCount(props) {
        setCount(count + props);
    }

    function downCount(props) {
        if (count !== 0) {
            setCount(count - props);
        } else {
            setCount(0);
        }
    }
    

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => upCount(5)}>Increment</button>
            {{ count } === 0}
            <button onClick={() => downCount(5)}>Decrement</button>

        </div>
    );
}
