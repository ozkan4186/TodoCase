import React, { Component } from 'react'

export default class TodoListItem extends Component {
  render() {
    return (
      <li>
        <p className="checked">Todo </p>
        <p> Todo </p>
        <span className="task-icons">✖️</span>
      </li>
    );
  }
}
