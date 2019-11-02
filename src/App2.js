import React from 'react';
import Person from "./file2";
import { males, females } from "./file2";

export default function App2() {
    const { firstName, email} = Person;
    const friends = [...males, ...females].join(", ");
    const merged1 = [...males, "kurt", "Helle", ...females, "Tina"].join(", ");
    const personv2 = {...Person, phone: "12345678", friends} 
    return (
        <div>
            <p>do something</p>
            <h3>opg.2 Object and Array Destructuring </h3>
            <p>{firstName}</p>
            <p>{email}</p>
            {console.log(friends)}
            {console.log(merged1)}
            {console.log(personv2)}

        </div>
    )
}