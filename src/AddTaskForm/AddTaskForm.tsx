import React from 'react';

interface InputForm {
  id: string;
  addButton: React.MouseEventHandler;
  newTask: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<InputForm> = (props) => {
  return (
    <div>
      <input onChange={props.newTask}/>
      <button onClick={props.addButton}>Add</button>
    </div>
  );
};

export default AddTaskForm;