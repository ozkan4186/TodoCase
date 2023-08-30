import React from 'react'

const TodoListItem = ({ item, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <li>
        {item.isDone ? (
          <p className="checked" onClick={() => toggleTodo(item)}>
            {item.task}
          </p>
        ) : (
          <p onClick={() => toggleTodo(item)}>{item.task}</p>
        )}
        <span className="task-icons" onClick={() => deleteTodo(item.id)}>
          ✖️
        </span>{" "}
      </li>
    </div>
  );
};

export default TodoListItem