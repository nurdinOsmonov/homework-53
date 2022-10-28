import React from 'react';

interface PropsTask {
  id: string;
  task: string;
  delete: React.MouseEventHandler;

}

const Task: React.FC<PropsTask> = (props) => {
  return (
    <div className="taskDiv">
      <p>{props.task}</p>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Task;