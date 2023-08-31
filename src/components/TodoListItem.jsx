import Image from "next/image";

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
        <Image
          src={item.image} // Görsel verisini buradan alın
          alt="Açıklama metni"
          width={500} 
          height={300} 
        />
        <span className="task-icons" onClick={() => deleteTodo(item.id)}>
          ✖️
        </span>{" "}
      </li>
    </div>
  );
};

export default TodoListItem;
