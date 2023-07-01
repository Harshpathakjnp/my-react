import React,{ useState} from "react";
const SubmitHandler = () =>
{
    const [amt1,setAmt1] = useState(0);
    const [amt2,setAmt2] = useState(0);
    const [total,swtTotal]=useState(0);

    const amountChangeHandler1 = (event) =>
    {
        setAmt1(Number(event.target.value));
    };

    const amountChangeHandler2 = (event) =>
    {
        setAmt2(Number(event.target.value));
    };
    const submit=(event) =>
    {
        event.preventDefault();
        console.log(amt1 + amt2);
        swtTotal(amt1+amt2);
    };

    return <form onSubmit={submit}>
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler1}></input>
        <input type="number" onChange={amountChangeHandler2}></input>
        <h1>{amt1}</h1>
       <h1> {amt2}</h1>
       <h1>{total}</h1>
       <input type="submit" value="Submit" ></input>

    </form>





}
export default SubmitHandler;