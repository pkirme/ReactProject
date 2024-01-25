import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    if(counter>=15){
      return;
    }
    setCounter(counter + 1);
  };
  const desCounter = () => {
    if(counter<=0){
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={incCounter}>Increase</button>
      <button onClick={desCounter}>Decrease</button>
    </>
  );
}

export default App;
