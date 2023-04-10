import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const BtnAddTodo = ({
  text
})=>{
  // const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const Send = ()=>{
    dispatch({
      type: 'ADD_TODOS',
      payload: {
        text,
        complete: false
      }
    });
  }

  return(
    <>
      <button
        className='w-1/5 h-14 bg-sky-500 text-white' 
        onClick={Send}>Add what to do</button>
    </>
  );
}

BtnAddTodo.propTypes = {
  // text: PropTypes.string,
}

export default BtnAddTodo;