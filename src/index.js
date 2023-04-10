import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const initialState = {
  todos: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODOS':
      return { ...state, todos: [...state.todos, payload] }
    case 'REMOVE_TODOS':
      return { ...state, todos: [...state.todos.filter(todo => todo.text !== payload)] }
    case 'CHANGE_TODOS':
      return { ...state, todos: [...state.todos.map(todo => todo.text === payload ? {...todo, complete: !todo.complete} : todo)] }
    default:
      return state
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


