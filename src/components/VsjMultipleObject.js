import React, { useState} from "react";
const VsjMultipleObject = () => 
{
    const [sumdata,setSum] = useState({n1:0,n2:0});

    const sumN1 = (event) => {
        setSum({...sumdata,n1:Number( event.target.value),});
    };


    const sumN2 = (event) => {
        setSum({...sumdata,n2:Number( event.target.value),});
    };

    return <form>
        <label>N1</label>
        <input type="text" onChange={sumN1}></input>
        <label>N2</label>
        <input type="text" onChange={sumN2}></input>
        {sumdata.n1 + sumdata.n2}
    </form>

}
export default VsjMultipleObject;
