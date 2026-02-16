export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter(item => item.packed).length;
  const packedPercentage = (numPackedItems / numItems * 100).toFixed(2);
  

  return (
    <footer className="stats">
      <em>💼 You have {numItems} items on you list, and you already packed {numPackedItems} ({packedPercentage}%)</em>
    </footer>
  );
}