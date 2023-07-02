import React, { useState } from "react";
const StateUp = (props) => {
    const [num, setNum] = useState(0);
    const [total,setTotal] = useState(0);
    
    const numChangeHandler = (event) => {
        setNum(Number(event.target.value));
        
        
        
    };
    const SubmitHandler = (event) =>
    {
        event.preventDefault();
        setTotal(num);
        props.onSaveData(num+num);
        
        
        
    };
    return <div>
        <h2>From Client = { num} </h2>
        <input type="number" onChange={numChangeHandler}></input>
        <input type="submit" value="Submit" onClick={SubmitHandler}></input>
    </div>
}
export default StateUp;