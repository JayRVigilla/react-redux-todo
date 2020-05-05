import React from "react";
import { useDispatch } from "react-redux";
import "./ToDoItem.css"


/**
 * ToDoItem Component: represents a task on the ToDo List
 * renders HTML for a ToDoItem
 * allows user to check the ToDoItem off thier list and delete it
 *   props:
 *      task: text describing the thing a user want to be reminded to do
 *      dueDate: date the ToDoItem should be completed by
 *      id: unique identifyer
 *   redux:
 *      Uses useDispatch to call on the DELETE_TODO action from toDoReducer
 * 
 */

function ToDoItem({todo: {task, dueDate, id}}) {
  const dispatch = useDispatch();

  const checkOffTask = (taskID) => {
    dispatch({type: "DELETE_TODO", payload: taskID})
  }

  return (
    <li>
      <button onClick={() => checkOffTask(id)}>Gotta Do It</button>
      <p>{task}</p>
      <p>{dueDate}</p>
    </li>
  )
}

export default ToDoItem;