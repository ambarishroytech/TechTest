import React, { memo } from "react";

const Todos = ({ todos, onAddTodo }) => {
  console.log("ToDos Rendered: " + todos.length);
  return (
    <div>
      <button onClick={onAddTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </div>
  );
};

export default memo(Todos);

// Homework: example of UseCOntext
