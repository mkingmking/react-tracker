import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default TaskList;
