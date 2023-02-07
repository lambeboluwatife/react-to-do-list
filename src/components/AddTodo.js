import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter Todo");
      return;
    }

    onAdd({ text });

    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Todo"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          className="form-control btn btn-primary"
          value="Add"
        />
      </div>
    </form>
  );
};

export default AddTodo;
