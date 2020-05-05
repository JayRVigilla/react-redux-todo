import React from "react";
import ToDoList from "./TodoList";
import ToDoAddForm from "./ToDoAddForm"

/**
 * ToDoApp Component: uses ToDoAddForm component to add to ToDoList compoennt
 */

 function ToDoApp(){
   return(
     <div>
       <ToDoAddForm />
       <ToDoList />
     </div>
   )
 }

 export default ToDoApp;