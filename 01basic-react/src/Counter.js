import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const AddCounter = () => {
    if(counter>20){
        return;
    }
    setCounter(counter++);
  };

  const RemoveCounter = () => {
    if(counter<0){
        return;
    }
    setCounter(counter--);
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
