import "./index.css"
import { useState } from "react";

export default function  App() {
  const [bill, setBill] = useState(0);
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);

  let tip = ((rating1 + rating2) / 2);

  function handleChangeBill(value) {
    setBill(value);
  }

  function handleChangeRating1(value) {
    setRating1(value);
  }

  function handleChangeRating2(value) {
    setRating2(value);
  }

  function handleReset() {
    setRating1(0);
    setRating2(0);
    setBill(0);
  }

  return (
    <div>
      <BillInput handleChangeBill={handleChangeBill} bill={bill} />

      <Rating rating={rating1} handleChangeRating={handleChangeRating1}>
        How did you like the service?
      </Rating>

      <Rating rating={rating2} handleChangeRating={handleChangeRating2}>
        How did your friend like the service?
      </Rating>
      {
      (bill > 0) &&
      <>
        <Result bill={bill} tip={tip}/>
        <Button handleReset={handleReset}/>
      </>
        
      }
    </div>
  );
}

function BillInput({ handleChangeBill, bill }) {
  return (
    <div>
      <label for="bill">How much was the bill?</label>
      <input type="text" value={bill} onChange={(e) => handleChangeBill(Number(e.target.value))}></input>
    </div>
  )
}

function Rating({ handleChangeRating, rating, children }) {
  return (
    <div>
      {children}
      <select id="rating" value={rating} onChange={(e) => handleChangeRating(Number(e.target.value))} >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Result({bill, tip}) {
  return (
    <h2>You pay {bill + tip} (${bill} + ${tip})</h2>
  )
}

function Button({ handleReset }) {
  return (
    <button onClick={handleReset}>Reset</button>
  )
}