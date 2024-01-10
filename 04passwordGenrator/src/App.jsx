import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const copyPasswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[]?/<>|~";
    }
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  const copyPasswordOnClipboard = useCallback(() => {
    copyPasswordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden md-4">
          <input
            type="text"
            value={password}
            readOnly
            className="online-none w-full py-1 px-3"
            placeholder="Password"
            ref={copyPasswordRef}
          ></input>
          <button
            onClick={copyPasswordOnClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <label>Length:{length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="numInput"
              defaultValue={numberAllowed}
              className="cursor-pointer"
              onChange={() => setNumberAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="numInput">Number</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="charInput"
              defaultValue={charAllowed}
              className="cursor-pointer"
              onChange={() => setCharAllowed((prev) => !prev)}
            ></input>
            <label htmlFor="charInput">Charector</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
