const INITIAL_STATE = {
  todos: [] //array of todo objects with keys of task, dueDate, and a unique id
}

/**
 * Complete Reducer function for ise with Redux.
 * State held:
 *    todos: an array of todo objects requiring keys of: , ,  and a unique 
 *        task: sting of task to be done
 *        dueDate: date to complete task by 
 *        id: unique ID to identify inividual task by
 */

function toDoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]}

    case 'DELETE_TODO':
    return {...state, todos: state.todos.filter( todo => todo.id !== action.payload)}

    default:
      return state
  }
}

export default toDoReducer;