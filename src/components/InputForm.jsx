import React, { Component } from 'react'

export default class InputForm extends Component {
  render() {
    return (
      <div className="input-form">
        <input
          className="input-task"
          placeholder="Enter the todo..."
          type="text"
          maxLength={40}
        //   value={task}
        //   onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn-hover btn-color"
          type="submit"
        //   onClick={handleClick}
        //   disabled={!task.trim()}
        >
          Add New Todo
        </button>
      </div>
    );
  }
}
