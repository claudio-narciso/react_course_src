
import {useState} from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackinList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>
}

function Form() {

  // Destructuring do resultado do state que é um valor e uma função que nos permite mudar o valor de forma dinamica.
  // 
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // TODO: consele the selected data and reset the fields. Create a new item basically. Based on the objet above.
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

function PackinList() {
  return (
    <div className="list">
      <ul>
      {
        initialItems.map(item => <Item item={item} key={item.id}/>)
      }
      </ul>
    </div>
  );
}

function Item({item}) {
  return (
    <li style={item.packed ? {textDecoration: "line-through"} : {} }>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on you list, and you already packed X (X%)</em>
    </footer>
  );
}
