import { useState } from 'react'
import './App.css'
import InputField from './InputField'

function App() {

  const [tasks, setTask] = useState([]);
  const [newTask, addTask] = useState('');

  const add = (task) =>{
    
  }
 
  return (
    <>
      <InputField add={add(tasks)} />
    </>
  )
}

export default App
