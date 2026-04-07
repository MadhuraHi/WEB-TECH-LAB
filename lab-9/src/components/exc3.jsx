import { useState } from 'react';

export default function Exercise3() {
  const [count, setCount] = useState(0); // [cite: 31]

  return (
    <div style={{ padding: '15px', border: '2px solid green', marginTop: '10px' }}>
      <h2>Exercise 3: Counter System</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}