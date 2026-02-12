import { useState } from "react";

export default function App() {
  return (
    <div>
      <Buttons/>
    </div>

  );
}

function Buttons({name}) {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const today = new Date();

  today.setDate(today.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setSteps((e) => e - 1)}> - </button>
        <span>Steps : {steps}</span>
        <button onClick={() => setSteps((e) => e + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount(count - steps)}> - </button>
        <span>Count : {count}</span>
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
    </div>
  )
}
