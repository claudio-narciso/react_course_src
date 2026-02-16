import { useState } from "react";

export default function Form({ handleAddItem }) {
  // Destructuring do resultado do state que é um valor e uma função que nos permite mudar o valor de forma dinamica.
  // 
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {id: Date.now(), description, quantity, packed: false};
    console.log(newItem)

    handleAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      {/* onChange deve efectuar a mudança do valor do inpupt i.e target usando a função recuperado do useState*/}
      <input type="text" placeholder="item" value={description} onChange={e => setDescription(e.target.value)}/>
      <input type="submit" value="Add"/>
    </form>
  );
}