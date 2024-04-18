import React, { useState, useMemo, useEffect, useCallback } from "react";
import Todos from "./components/Todos/Todos";

const expensiveCalculation2 = (num) => {
  // console.log("Calculating");
  let s = num;
  for (let i = 0; i <= 99000000; i++) {
    s = s + i;
  }

  // console.log("Calculated:" + s);
  return s;
};

const expensiveCalculation = (num) => {
  // console.log("Calculating");
  let s = num;
  for (let i = 0; i <= 10000000; i++) {
    s = s + i;
  }
  // console.log("Calculated:" + s);
  return s;
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation2, setCalculation2] = useState(0);

  // const addTodoHandler = useCallback(() => {
  //   setTodos((prev) => [...prev, "New Todo"]);
  // }, []);

  const addTodoHandler = useMemo(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, []);

  const plusOne = () => {
    setCount(count + 1);
    console.log("PlusOne:" + count);
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  useEffect(() => {
    setCalculation2(expensiveCalculation2(count));
  }, [count]);

  return (
    <div>
      <h1>My Todos</h1>
      {/* <button onClick={addTodoHandler}>Add Todo</button> */}
      <Todos todos={todos} onAddTodo={addTodoHandler} />
      <div>
        <hr />
        <button onClick={plusOne}>++1</button>
        <h2>Calculation: {calculation}</h2>
        <h3>Calculation-2: {calculation2}</h3>
      </div>
    </div>
  );
};
export default App;
