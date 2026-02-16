
import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Bording pass", quantity: 2, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: true },
];

export default function App() {

  const [items, setItems] = useState(initialItems)

  // TODO: Syntax a vérificar 
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((e) => e.id !== id))
  }

  function handlePackItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleClearAll() {
    setItems([]);
  }

  console.log(items)

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem}/>
      <PackinList items={items} handleRemoveItem={handleRemoveItem} handlePackItem={handlePackItem} handleClearAll={handleClearAll}/>
      <Stats items={items} />
    </div>
  )
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>
}

function Form({ handleAddItem }) {


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

function PackinList({ items, handleRemoveItem, handlePackItem, handleClearAll }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if(sortBy === "input") {
    sortedItems = items;
  } else if(sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  } else if(sortBy == "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed)
  }

  return (
    <div className="list">
      <ul>
      {
        sortedItems.map(item => <Item item={item} handleRemoveItem={handleRemoveItem} handlePackItem={handlePackItem} key={item.id}/>)
      }
      </ul>
      <div class="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
    </div>
  );
}

function Item({ item, handleRemoveItem, handlePackItem }) {

  return (
    <li style={item.packed ? {textDecoration: "line-through"} : {} }>
      <input type="checkbox" id={item.id} checked={item.packed} onChange={() => handlePackItem(item.id)} />
      <label for={item.id}>
        <span>{item.quantity} {item.description}</span>
      </label>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter(item => item.packed).length;
  const packedPercentage = (numPackedItems / numItems * 100).toFixed(2);
  

  return (
    <footer className="stats">
      <em>💼 You have {numItems} items on you list, and you already packed {numPackedItems} ({packedPercentage}%)</em>
    </footer>
  );
}
