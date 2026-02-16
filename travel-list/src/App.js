
import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats"

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
      <PackingList items={items} handleRemoveItem={handleRemoveItem} handlePackItem={handlePackItem} handleClearAll={handleClearAll}/>
      <Stats items={items} />
    </div>
  )
}
