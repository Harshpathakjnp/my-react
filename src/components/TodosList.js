import React, { useState } from 'react';
import TodosInput from './TodosInput';
import TodosItem from './TodosItem';
import './TodosList.css';

function TodosList() {
  const [listTodo, setListTodo] = useState([]);

  const deleteListItems = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodosInput addList={addList} />
        {console.log(listTodo)}
        <table border={1} className='table-container'>

        <tr className="list-items">
          {listTodo.map((e, i) => (
            <TodosItem
              key={i}
              item={e}
              index={i}
              deleteitem={deleteListItems}
            />
          ))}
        </tr>
        </table>
      </div>
    </div>
  );
}

export default TodosList;
