import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo/CreateTodo"; // export
import Header from "./components/Header/Header"; // export defaul
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [isLoading, setLoading] = useState(true);
  const todosLocal = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(todosLocal);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (str) => {
    setTodos([...todos, {text: str, status: false, id: Date.now()}])
  };

  const statusChange = (id) => {
    const newArr = todos.map((item) => {
      if(item.id === id) {
        return {...item, status: !item.status}
      }
      return item
    })
    setTodos(newArr)
  }

  const deleteTodo = (id) => {
    const newArr = todos.filter((item) => item.id !== id )
    setTodos(newArr)
  }

  const editTodo = (newText, id) => {
    const newArr = todos.map((item) => {
      if(item.id === id) {
        return {...item, text: newText}
      }
      return item
    })
    setTodos(newArr)
  }

  const newTodos = todos.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      title={item.text}
      status={item.status}
      onStatusChange={statusChange}
      onDelete={deleteTodo}
      onEdit={editTodo}
    />
  ));



  if(isLoading) {
    return <div className="loader">
      <img width="180px" src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" />
    </div>
  }
  const result = todos.reduce((akk, item) => akk + item.status, 0);
  return (
    <div className="App">
      <Header todosLen={todos.length}  compleateTodos={result}/>
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className="todo-list">
        {newTodos.length ? newTodos : <h1>Please add todo</h1> }
      </div>
    </div>
  );
}

export default App;
