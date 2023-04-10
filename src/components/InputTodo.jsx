import PropTypes from 'prop-types';


const InputTodo = ({
  text,
  handleChange
})=>{



  return(
    <>
      <input 
      className='border outline-sky-500 inline w-4/5 px-5 h-14 rounded-none'
        type="text"
        value={text}
        onChange={handleChange}
      />
    </>
  );
}

InputTodo.propTypes = {
  // text: PropTypes.string,
}

export default InputTodo;