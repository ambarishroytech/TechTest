import React, { useState, useEffect } from "react";
import Todos from "./components/Todos/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [calculation, setCalculation] = useState(0);
  const [count, setCount] = useState(1);

  const addTodoHandler = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  const expensiveCalculation = () => {
    console.log("Calculating");
    let s = 0;
    for (let i = 0; i <= 10000000; i++) {
      s = s + i;
    }
    s = s * count;
    console.log("Calculated:" + s);
    setCalculation(s);
  };

  useEffect(() => {
    expensiveCalculation();
  }, [count]);

  const plusOne = () => {
    setCount(count + 1);
    console.log("PlusOne:" + count);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <button onClick={addTodoHandler}>Add Todo</button>
      <Todos todos={todos} />
      <div>
        <hr />
        <button onClick={plusOne}>++1</button>
        <h2>
          Count: {count}, Calculation: {calculation}
        </h2>
      </div>
    </div>
  );
};
export default App;
