import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.test)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Make things scheduled</h1>
      <ToDoForm onSubmit={addToDo} />
    </div>
  );
}

export default ToDoList;
