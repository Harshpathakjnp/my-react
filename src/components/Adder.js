import React, { useState} from 'react';
const Adder = (props) =>
{
    const [num1,setAdd1] = useState(0);
    const [num2,setAdd2] = useState(0);
    return <p>
    <input type='Number' onChange={event => setAdd1(event.target.value)}></input>
    <input type='Number' onChange={event => setAdd2(event.target.value)}></input>
    <h2>{num1}</h2>  
    <h2>{num2}</h2>
    <h1>{Number(num1) + Number(num2)}</h1>
    </p>
}
export default Adder;