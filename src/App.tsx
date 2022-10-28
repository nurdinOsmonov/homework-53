import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from './Task/Task';

function App() {
  // const random = () => {
  //   const number = Math.floor(Math.random() * 99999);
  //   return number.toString();
  // }

  const [tasks, setTask] = useState([
    {task: 'Buy milk', id: 't1'},
    {task: 'Walk with dog', id: 't2'},
    {task: 'Do homework', id: 't3'},
  ]);

  const currentTask = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    // const index = tasks.findIndex(p => p.id === id);
    const copyTasks = [...tasks];
    const copyTask = {...tasks[index]};
    copyTask.task = event.target.value;
    copyTasks[index] = copyTask;
    setTask(copyTasks);
  }

  const deleteTask = (index: number) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTask(tasksCopy);
  }

  const addButton = () => {
    const copyTask = [...tasks,  ]
    setTask(tasks);
  }

  const taskList = tasks.map((task, index: number) => (
      <Task
        key={task.id}
        task={task.task} id={task.id}
        delete={() => deleteTask(index)}
    />
));

  return (
    <div className="App">
      <AddTaskForm key='1' newTask={event => currentTask(event, 3)} id={'t4'} addButton={addButton}/>
      {taskList}
    </div>
  );
}

export default App;