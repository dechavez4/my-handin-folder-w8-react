import React, { useState, useEffect } from "react"
export default function TimeDisplay() {
    const [ date, setDate ] = useState(new Date());

    useEffect(() => {
        const setInt = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(setInt);
        };
    });

    return (
        <div>
            <p>Time is :{date.toLocaleTimeString()}</p>
        </div>
    );
}

