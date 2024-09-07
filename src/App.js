import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls';
import Board from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: ['Backlog', 'To Do', 'Ongoing', 'Done'],
      tasks: {
        Backlog: [],
        'To Do': [],
        Ongoing: [],
        Done: [],
      },
      selectedTask: '',
      selectedTaskStage: null,
    };
  }

  handleCreateTask = (taskName) => {
    if (!taskName.trim()) return;
    this.setState(prevState => ({
      tasks: {
        ...prevState.tasks,
        Backlog: [...prevState.tasks.Backlog, taskName]
      }
    }));
  };

  handleSelectTask = (taskName, stage) => {
    this.setState({
      selectedTask: taskName,
      selectedTaskStage: this.state.stages.indexOf(stage)
    });
  };

  handleMoveTask = (direction) => {
    const { selectedTask, selectedTaskStage, stages } = this.state;
    if (!selectedTask || selectedTaskStage === null) return;

    const currentStage = stages[selectedTaskStage];
    const newStageIndex = direction === 'forward'
      ? selectedTaskStage + 1
      : selectedTaskStage - 1;

    if (newStageIndex < 0 || newStageIndex >= stages.length) return;

    const newStage = stages[newStageIndex];

    this.setState(prevState => ({
      tasks: {
        ...prevState.tasks,
        [currentStage]: prevState.tasks[currentStage].filter(task => task !== selectedTask),
        [newStage]: [...prevState.tasks[newStage], selectedTask],
      },
      selectedTaskStage: newStageIndex,
    }));
  };

  handleDeleteTask = () => {
    const { selectedTask, selectedTaskStage, stages } = this.state;
    if (!selectedTask || selectedTaskStage === null) return;

    const currentStage = stages[selectedTaskStage];

    this.setState(prevState => ({
      tasks: {
        ...prevState.tasks,
        [currentStage]: prevState.tasks[currentStage].filter(task => task !== selectedTask),
      },
      selectedTask: '',
      selectedTaskStage: null,
    }));
  };

  render() {
    const { tasks, selectedTask, selectedTaskStage, stages } = this.state;

    return (
      <div className="App">
        <div className="controls">
          <Controls
            onCreateTask={this.handleCreateTask}
            onSelectTask={this.handleSelectTask}
            onMoveTask={this.handleMoveTask}
            onDeleteTask={this.handleDeleteTask}
            selectedTask={selectedTask}
            selectedTaskStage={selectedTaskStage}
            stages={stages}
          />
        </div>
        <div className="board">
          <Board
            tasks={tasks}
            stages={stages}
            onSelectTask={this.handleSelectTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
