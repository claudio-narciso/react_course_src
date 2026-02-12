import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Buttons/>
    </div>

  );
}

function Buttons({name}) {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  // Get initial date and set the gap based in count value.
  const today = new Date();
  today.setDate(today.getDate() + count);

  function handleReset() {
    setCount(0);
    setSteps(1);
  }

  return (
    <div>
      {/* Range input */}
      <div>
        <input type="range" min="1" max="20" value={steps} onChange={(e) => setSteps(Number(e.target.value))} />
        <span>Steps : {steps}</span>
      </div>

      {/* Input Count and increase and decrease buttons */}
      <div>
        <button onClick={() => setCount(count - steps)}> - </button>
        <input type="text" name="count" value={count} onInput={(e) => setCount(Number(e.target.value))}/>
        <button onClick={() => setCount(count + steps)}> + </button>
      </div>

      <span>{count !== 0 && Math.abs(count)} 
      {  // Conditionnaly print the correct mmessage using ternary operators.
        count === 0 
        ? "Today is "
        : count > 0 
        ? " days from today is "
        : " days before was "          
      }
      {today.toDateString()}
      </span>

      {/* Reset button que só aparece quando não estamos no estado padrão */}
      {steps !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  )
}
