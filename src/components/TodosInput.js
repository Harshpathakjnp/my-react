import React, { useState } from 'react'

function TodosInput(props) {
    const [inputText,setInputText] = useState("");
  return (
    <div className='input-container'>
       <input type='text' className='input-box-todo' value={inputText} placeholder='Enter Your Todo..' onChange={(event) => {setInputText(event.target.value)}}></input>
       <button className='add-btn' onClick={() => {props.addList(inputText) 
       setInputText("");
    
    }}>+</button>
    </div>
  )
}

export default TodosInput
