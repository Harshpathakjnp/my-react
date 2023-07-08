import React, { useState } from 'react'
import TodosInput from './TodosInput';

function TodosList() {
    const [listTodo,setListTodo] = useState([]);
    let addList = (inputText) => {
        setListTodo([...listTodo,inputText]);
    }
  return (
    <div className='main-container'>
        <div className='center-container'>
            <TodosInput addList = {addList}/>
            {console.log(listTodo)}
            <li className='list-items'>
                item 1
            </li>

        </div>
      
    </div>
  )
}
export default TodosList;
