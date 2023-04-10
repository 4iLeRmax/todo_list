import { useState } from 'react';


import InputTodo from "./components/InputTodo";
import BtnAddTodo from "./components/BtnAddTodo";
import TodoList from './components/TodoList';
import { useSelector } from 'react-redux';


function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  // const todos = useSelector(state=> state.todos)

  return (
    <div className='max-w-7xl mx-auto mt-5'>
      {/* <button onClick={()}></button> */}
      {/* {} */}
      <div className='flex mb-10'>
        <InputTodo
          text={text}
          handleChange={handleChange}
        />
        <BtnAddTodo
          text={text}
        />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
