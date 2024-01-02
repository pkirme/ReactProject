
import Card from "./components/Card";
import "./App.css";

function App() {
  let user="priti";
  return (
    <>
      <h1 className="bg-green-400 text-black-p3 rounded-xl mb-4">Tailwind</h1>
      <Card user={user} onClkTxt="click me"/>
      <Card user="Sagar" onClkTxt="visit me"/>
    </>
  );
}

export default App;
