import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-3 py-2 gap-3 shadwo-lg bg-white rounded-3xl">
          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>

          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>

          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "olive", color: "white" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>

          <button
            className="rounded-3xl px-3 py-2 shadwo-lg"
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
