import { useState } from 'react';
import './App.css';
import InputField from './InputField';
import { List } from './List';

function App() {
  const [tasks, setTask] = useState([]);

  return (
    <>
      <div className="mainDiv">
        <h1>To-Do List App</h1>
        <InputField
          tasks={tasks}
          setTask={setTask}
        />
        <List
          tasks={tasks}
          setTask={setTask}
        />
      </div>
    </>
  );
}

export default App;
