import React,{useState} from "react";
const MapUse = (props) => {
    const numbers = props.data;
    const listitems = numbers.map((number)=>{return <li>{number*2}</li>});

    return <div>
        <h2>List of Numbers </h2>
        <ul>{listitems}</ul>
    </div>
}
export default MapUse;