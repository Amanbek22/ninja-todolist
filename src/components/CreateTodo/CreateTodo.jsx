import React, {useState} from "react";

export function CreateTodo(props) {
  const [inputValue, setInputValue] = useState('')

  const submit = (e) => {
    e.preventDefault();
    if(props.todosLen < 10) {
      props.onAddTodo(inputValue); 
      setInputValue('')
    } else {
      alert("Вы больше не можете добавить Todo!")
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={submit}>
      <input value={inputValue} onChange={handleChange} type="text" />
      <button>+ Add</button>
    </form>
  );
}
