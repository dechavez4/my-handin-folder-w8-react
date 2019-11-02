import React from 'react';
import PropTypes from 'prop-types';
import { names } from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return (
        <h1>
            hello {firstName} {lastName} {email}
        </h1>
    );
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={45} />
            <WelcomePerson person={names[0]} />
        </div>
    );
}

export default App;