import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const List = ({ tasks, setTask }) => {

    const deleteTask = (id) => {
        setTask(tasks.filter(task => task.id !== id));
    }

    const completeCheck = (id) => {
        setTask(
            tasks.map(task =>{
                if(task.id === id){
                    return {...task, completed : !task.completed};
                }
                else{
                    return task;
                }
            })
        )
        console.log(tasks)
    }

    return (
      <div className='list'>
        {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((item) => (
          <div className='listItem' key={item.id}>
            <input  type="checkbox" 
                    className="checkmark"
                    checked={item.completed === true} 
                    onChange={() => completeCheck(item.id)} 
            />
            <span className={item.completed === true ? 'completedTask' : ''}>{item.text}</span>
            <button className='deleteBtn' onClick={() => deleteTask(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
          </div>
        ))
      )}
      </div>
    );
  };
  
  List.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
    setTask: PropTypes.func.isRequired,
  };