import React, { useState } from "react";
/*
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => <li>{n}</li>);
  return  listItems ;
}
*/

function ListItem(props) {
    return <li>{props.value}</li>
}


function ListDemo(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number => (
        <ListItem key={number.toString()} value={number} />
    ));
    return (
        <div>
            {listItems}
        </div>
    );
}
export default function App() {
    const [numbers] = useState([1, 2, 3, 4]);
    return <ListDemo numbers={numbers} />;
}
