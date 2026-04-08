import { useState } from 'react';

export default function ListExercise() {
  const [items, setItems] = useState([]); // Store items in an array state [cite: 20]
  const [text, setText] = useState('');

  const addItem = () => {
    if (text.trim()) {
      // Add new item with a unique ID as a key [cite: 22, 23]
      setItems([...items, { id: Date.now(), val: text }]);
      setText('');
    }
  };

  const removeItem = (id) => {
    // Update the list dynamically after removal [cite: 24, 25]
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Exercise 2: Dynamic List</h2>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter task or product..." 
      />
      <button onClick={addItem}>Add Item</button>

      {/* Conditional rendering for empty list [cite: 26] */}
      {items.length === 0 ? <p>No items added yet.</p> : (
        <ul>
          {items.map(item => (
            <li key={item.id}> {/* Unique key attribute [cite: 22] */}
              {item.val} 
              <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}