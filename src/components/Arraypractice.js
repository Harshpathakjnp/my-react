import React, { useState } from 'react'
let summ = 0;
function Arraypractice() {
    const [inp, setInp] = useState(0);
    const [arr, setArr] = useState([]);
    

    const inpChangeHandler = (event) => {
        setInp(event.target.value);
    }

    const Push = (data) => {
        summ = summ + Number(data);
        setArr([...arr, data])

    }
    const Pop = () => {
        summ = summ - Number(arr[0]);
        let newarr = arr
        newarr.pop()
        setArr([...newarr])

    }
    const Shift = () => {
        summ = summ - Number(arr[0])
        let newarr = arr
        newarr.shift()
        setArr([...newarr])

    }
    const UnShift = (data) => {
        summ = summ + Number(data);
        let newarr = arr
        newarr.unshift(data)
        setArr([...newarr])

    }
    return (
        <div>
            <input type='number' onChange={inpChangeHandler}  ></input>
            <br></br>
            <button onClick={() => { Push(inp) }}>Push</button>
            <button onClick={() => { Pop() }}>Pop</button>
            <button onClick={() => { Shift() }}>Shift</button>
            <button onClick={() => { UnShift(inp) }}>UnShift</button>
            {arr.map((n,i) => {
                
                return  <ul key={i}>
                    <li>{n}</li>
                </ul>
            })}
            <h2>Sum = {summ}</h2>
        </div>
    )
}

export default Arraypractice;
