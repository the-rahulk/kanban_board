import React from 'react';

const Task = ({ taskName, onSelectTask }) => {
  return (
    <div
      style={{ cursor: 'pointer', padding: '5px', borderBottom: '1px solid gray' }}
      onClick={() => onSelectTask(taskName)}
    >
      {taskName}
    </div>
  );
};

export default Task;