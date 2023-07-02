import React, { useState } from 'react';
const VsjA = (props) => {
    const [n1, setN1] = useState(0);

    const n1ChangeHandler = (event) => {
        //console.log("N1 Changed");
        //console.log(event.target.value);
        setN1(Number(event.target.value));
        props.onSaveData(event.target.value);
    }


    return <div>
        <h2>Client {n1}</h2>
        VsjA<input type="number" onChange={n1ChangeHandler} />
    </div>
}
export default VsjA;