import React from 'react'
import TodoListItem from './TodoListItem'

const Todolist = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos?.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist