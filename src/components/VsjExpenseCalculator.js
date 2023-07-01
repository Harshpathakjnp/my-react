import React, {useState} from "react";
const VsjExpenseCalculator = (props) =>
{
    const [expensedata,setExpense] = useState({
        id:Math.round(10000*Math.random()),
        item:'',
        amount:0,
        tdate:''
    });

    const itemChangeHandler = (event) =>
    {
        setExpense((prevState) => {return {...prevState,item:Number(event.target.value)}});
    };

    const amountChangeHandler = (event) =>
    {
        setExpense((prevState) => {return {...prevState,amount:Number(event.target.value)}});
    };

    const dateChangeHandler = (event) =>
    {
        setExpense((prevState) => {return {...prevState,tdate:event.target.value}});
    };

    const submitHandler = (event) =>
    {
        event.preventDefault()
        setExpense({item:'',
        amount:0,
        tdate:''
    });
    };


    return  <form onSubmit={submitHandler}>
    <div class="form-group">
      <label for="item">Item</label>
      <input type="text" class="form-control" value={expensedata.item} onChange={itemChangeHandler} placeholder="Enter Item" id="item"/>
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" class="form-control" value={expensedata.amount} placeholder="Enter Amount" id="amount" onChange={amountChangeHandler}/>
    </div>
    <div class="form-group">
      <label for="tdate">Date</label>
      <input type="date" class="form-control" value={expensedata.tdate} placeholder="Enter Date" id="tdate" onChange={dateChangeHandler}/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>;
  }
  export default VsjExpenseCalculator;


