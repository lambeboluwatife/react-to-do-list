const Todo = ({ todo, onDelete }) => {
  return (
    <>
      <h6 className="text-success border p-3 ">
        {todo.text}{" "}
        <i
          className="fa fa-times text-danger"
          style={{ float: "right" }}
          onClick={() => onDelete(todo.id)}
        ></i>
      </h6>
    </>
  );
};

export default Todo;
