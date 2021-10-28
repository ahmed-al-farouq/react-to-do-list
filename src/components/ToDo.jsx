import TodoItem from './TodoItem';

function ToDo({
  todo, handleChange, deleteItems, setUpdate,
}) {
  return (
    <ul>
      {
        todo.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            task={item.task}
            completed={item.completed}
            handleChangeProp={handleChange}
            deleteItemsProp={deleteItems}
            setUpdate={setUpdate}
          />
        ))
      }
    </ul>
  );
}

export default ToDo;
