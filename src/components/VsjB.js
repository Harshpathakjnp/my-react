import React, {useState} from "react";
const VsjB = (props) =>
{
    const [n1,setN1] = useState(0);

    const n1ChangeHandler = (event) =>
    {
        setN1(Number(event.target.value));
        props.onSaveDate(event.target.value);
    };
    return <div>
        <h2>{props.n1}</h2>
        <input type="number" value={props.n1} onChange={n1ChangeHandler}></input>
    </div>
}
export default VsjB;