import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import './index.css';
import toDoReducer from ".toDoReducer";
import App from './App';

/**
 * Top level of app.
 * Creates Redux state with toDoReducer.
 *  Redux state available throughout app:
 *    todo: An object that stores a task, dueDate, and a unique id
 */

const store = createStore(
  toDoReducer,
  compose(
    applyMiddleware(thunk), //Needed for something we do later (async stuff)
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

