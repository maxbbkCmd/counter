import { useState } from "react";
import "./App.css";
import { Counter } from "./components/button/Counter";

function App() {
  const [counter, setCounter] = useState(2);

  const incCounter = () => {
    setCounter(counter + 1);
  }

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    <div className='app'>
      <Counter counter={counter} incCounter={incCounter} resetCounter={resetCounter}/>
    </div>
  );
}

export default App;
