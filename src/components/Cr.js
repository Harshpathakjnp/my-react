import React from 'react';
import { useState } from 'react';

function Cr(props) {

    const buttonClickHandler = () =>
    {
        alert(props.url);
        alert("This is running after a button click");
    }

    const [title, setTitle] = useState(props.url);

  return (
    <div>
      {props.url}
      {console.log(title)}
      <button onClick={buttonClickHandler}>Alert</button>

      
    </div>
  )
}

export default Cr;
