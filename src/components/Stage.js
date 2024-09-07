import React from 'react';
import Task from './Task';

const Stage = ({ stageName, tasks, onSelectTask }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '200px' }}>
      <h3>{stageName}</h3>
      {tasks.map(task => (
        <Task
          key={task}
          taskName={task}
          onSelectTask={onSelectTask}
          data-testid={`task-${task}`}
        />
      ))}
    </div>
  );
};

export default Stage;