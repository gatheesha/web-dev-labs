import { useState } from 'react';
import './App.css';

export default function App() {
  // React remembers these two values between displays.
  const [tasks, setTasks] = useState(['Read lecture notes', 'Practise JavaScript']);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  }

  function clearTasks() {
    setTasks([]);
  }

  return (
    <main className="app">
      <h1>Todo list</h1>
      <p className="student">Name: Gatheesha Nipulma | Index: ICT24896</p>
      <p>Total tasks: {tasks.length}</p>
      <p>Add the work you want to do in your next study session.</p>
      <div className="task-entry">
        <input aria-label="New task" placeholder="Enter a study task"
          value={newTask} onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={addTask}>Add task</button>

      </div>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task}</li>)}
        <button onClick={clearTasks}>Clear all</button>
      </ul>
    </main>
  );
}
