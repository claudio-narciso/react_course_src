export default function Item({ item, handleRemoveItem, handlePackItem }) {

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