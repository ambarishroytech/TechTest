import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </div>
  );
};

export default Todos;
