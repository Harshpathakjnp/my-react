import React, { useState} from "react";
const VsjForm = ()=>
{
    const [enteredamount,setEnteredAmount] = useState(0);
    const amountchangehandler = (event)=>
    {
        setEnteredAmount(event.target.value)
    };
    return <form>
        <label>Amount</label>
        <input type="text" onChange={amountchangehandler}></input>
        <h1>{enteredamount}</h1>
    </form>
}
export default VsjForm;