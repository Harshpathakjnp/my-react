import React from 'react';
import './TodosList.css';

function TodosItem(props) {
  let list = props.item;

  return (
    <tr className="list-items">
      <td>{props.item}</td>
      <td>
        <button
          onClick={(e) => {
            props.deleteitem(props.index);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default TodosItem;
