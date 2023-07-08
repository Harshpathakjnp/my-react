import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function SimpleApi() {
    const [p,setp] = useState('True');
    const [fact,setFact] = useState("");
    const baseURL = `https://catfact.ninja/fact`;
    axios.get(baseURL).then((response) => {
        console.log(response.data.fact)
        setFact(response.data)
    }).catch(error => {
        <p>Here is Error </p>
    },[p])
    const buttonChangeHandle = () =>
    {
        setp(!p)
    }
  return (
    <div>
        <button onClick={buttonChangeHandle}>button</button>
      <h3>{fact.fact}</h3>
      
      
    </div>
  )
}

export default SimpleApi
