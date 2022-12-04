import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Doctor',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 1,
      text: 'Meeting',
      day: 'Feb 6th at 3:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Shopping',
      day: 'Feb 5th at 5:30pm',
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.max(...tasks.map((o) => o.id)) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;
