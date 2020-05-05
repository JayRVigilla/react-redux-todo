import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { v4 as uuid } from 'uuid';


/** */
function ToDoAddForm() {
  const dispatch = useDispatch();
  const INITIAL_STATE = { task: "", dueDate: "", };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let todoObj = {
      task: formData.task,
      dueDate: formData.dueDate,
      id: uuid()
    }
    dispatch({type: "ADD_TODO", payload: todoObj})
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="task">Task</label>
        <input type="text"
          name="task"
          value={formData.task}
          placeholder=""
          onChange={handleChange}
        ></input><br />

        <label htmlFor="dueDate">Due Date</label>
        <input type="date"
          name="dueDate"
          value={formData.dueDate}
          placeholder=""
          onChange={handleChange}
        ></input><br />

        <button>Add ToDo</button>
      </form>
    </div>

  )
}

export default ToDoAddForm;