import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const changeComplete = (text)=>{
    dispatch({
      type: 'CHANGE_TODOS',
      payload: text
    })
  }
  const removeTodo = (text)=>{
    dispatch({
      type: 'REMOVE_TODOS',
      payload: text
    })
  }

  return (
    <>
      <ul className=''>
        {todos.map(({text, complete}, index) =>
          <li key={index} className='flex items-center gap-2 bg-slate-300 mb-2 rounded-md pl-4'>
            <input 
              className=''
              type="checkbox"
              checked={complete}
              onChange={()=> changeComplete(text)}
            />
            {/* <p style={complete === true && {textDecoration: 'line-through'}}>{text}</p> */}
            <p 
              style={{textDecoration: complete && 'line-through'}}
              className='text-3xl'
            >
              {text}
            </p>
            <button 
              className='p-2 border bg-sky-500 text-white rounded-md w-10 h-10 p-0 text-2xl ml-auto'
              onClick={()=> removeTodo(text)}>X</button>
          </li>
        )}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  // text: PropTypes.string,
}

export default TodoList;