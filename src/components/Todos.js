import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <>
     {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
     ))} 
    </>
  );
}

export default Todos;
