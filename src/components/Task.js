import React from 'react';

function Task({ task, deleteTask, toggleTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <button className="complete" onClick={() => toggleTask(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
