import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
const App = () => {
  const [todos, setTodos] = useState([
    { text: "wash clothes", done: true, id: 1 },
    { text: "sweep", done: false, id: 2 },
  ])

  // const todos = [
  //   { text: "wash clothes", done: true, id: 1 },
  //   { text: "sweep", done: false, id: 2 },
  // ];

  const onAdd = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const done = false

    const newTodo = { id, done, ...todo }

    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="card-deck">
          <div className="card">
            <div className="card-header text-center display-4">To Do List</div>
            <div className="card-body">
              <AddTodo onAdd={onAdd} />
              <hr />
              <Todos onDelete={deleteTodo} todos={todos} />
            </div>
            <div className="card-footer text-center">Copyright 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
