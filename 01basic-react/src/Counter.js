import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(15);

  const AddCounter = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
  };

  const RemoveCounter = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={AddCounter}>Add</button>
      <button onClick={RemoveCounter}>Delete</button>
    </>
  );
};
export default Counter;
