import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import toDoReducer from "./toDoReducer";


/**
 * ToDoList Component: an array of ToDoItems
 */
function ToDoList() {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <ToDoItem key={toDoReducer.id} todo={todo} />
        )}
      </ul>
    </div>
  )
}

export default ToDoList;