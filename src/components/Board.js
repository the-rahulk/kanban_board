import React from 'react';
import './Board.css';

const Board = ({ tasks, stages, onSelectTask }) => {
  return (
    <div className="board-container">
      <h2>Kanban Board</h2>
      <div className="board">
        {stages.map((stage, index) => (
          <div key={index} data-testid={`stage-${index}`} className="stage">
            <h3>{stage}</h3>
            {tasks[stage].map((task, idx) => (
              <div
                key={idx}
                data-testid={`task-${task}`}
                className="task"
                onClick={() => onSelectTask(task, stage)}
              >
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
