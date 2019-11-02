import React, { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        window.alert(name.value);
    }

    function handleChange(event) {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setName({ value, [id]: value });
    }

    return (
        <div>
            <form onChange={handleChange}>
                <label>
                    Name:
          <input id="name" type="text" placeholder="name" />
                </label>
                <button onClick={handleSubmit}>send info</button>
            </form>
            {name.value}
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
