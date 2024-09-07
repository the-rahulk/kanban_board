import React, { useState } from 'react';
import './Controls.css';

const Controls = ({ onCreateTask, onSelectTask, onMoveTask, onDeleteTask, selectedTask, selectedTaskStage, stages }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleCreateTask = () => {
    if (newTaskName.trim()) {
      onCreateTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <div className="controls-container">
      <h2>Controls</h2>
      <div className="task-controls">
        <div className="input-group">
          <input
            data-testid="new-task-name-input"
            type="text"
            placeholder="New task name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button
            data-testid="create-task-btn"
            onClick={handleCreateTask}
            disabled={!newTaskName.trim()}
          >
            Create
          </button>
        </div>
        <div className="input-group">
          <input
            data-testid="selected-task-field"
            type="text"
            placeholder="Selected task name"
            value={selectedTask}
            readOnly
          />
          <button
            data-testid="move-back-btn"
            onClick={() => onMoveTask('backward')}
            disabled={selectedTaskStage === 0 || selectedTaskStage === null}
          >
            Move Back
          </button>
          <button
            data-testid="move-forward-btn"
            onClick={() => onMoveTask('forward')}
            disabled={selectedTaskStage === null || selectedTaskStage === stages.length - 1}
          >
            Move Forward
          </button>
          <button
            data-testid="delete-btn"
            onClick={onDeleteTask}
            disabled={!selectedTask}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
