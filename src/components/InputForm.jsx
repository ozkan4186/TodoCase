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
        />
        <button
          className="btn-hover btn-color"
          type="submit" 
        >
          Add New Todo
        </button>
      </div>
    );
  }
}
