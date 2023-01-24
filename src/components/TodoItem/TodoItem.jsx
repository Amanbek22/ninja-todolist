import React, { useEffect, useState } from "react";
import css from "./TodoItem.module.css";


function TodoItem({ status, title, id, onStatusChange, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const handleChange = () => {
    onStatusChange(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  const submit = (event) => {
    event.preventDefault();
    onEdit(inputValue, id)
    setIsEdit(false)
  }

  const handleInput = (event) => {
    setInputValue(event.target.value);

  }

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input 
            value={inputValue}
            onChange={handleInput} 
            type="text" 
          />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input checked={status} onChange={handleChange} type="checkbox" />
          <p className={status ? css.compleat : ""}>{title}</p>
        </label>
      )}

      <div>
        <button onClick={handleEdit} className={css.button}>Edit</button>
        <button
          onClick={handleDelete}
          className={`${css.button} ${css.button_del}`}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
