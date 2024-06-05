import PropTypes from 'prop-types';
import { useState } from 'react';


const InputField = ({ tasks , setTask }) => {

    const [input, setInput] = useState('');

    const addTask = () => {
        if(input.trim()){
            const newTask = {
                id : tasks.length + 1,
                text : input,
                completed : false,
            }

            setTask([...tasks, newTask]);
            setInput('');
        }

    }

  return (
    <div className='inputs'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default InputField

InputField.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
    setTask: PropTypes.func.isRequired,
  };
