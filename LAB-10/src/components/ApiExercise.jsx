import { useState, useEffect } from 'react';

export default function ApiExercise() {
  const [data, setData] = useState([]); // Manage fetched data [cite: 33]
  const [loading, setLoading] = useState(true); // Loading indicator state [cite: 37]
  const [error, setError] = useState(null); // Error message state [cite: 38]

  useEffect(() => {
    // Perform API call using async/await [cite: 34, 35]
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        if (!response.ok) throw new Error("Failed to fetch data");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message); // Handle API errors [cite: 38]
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Dependency array ensures it runs only once [cite: 39]

  if (loading) return <p>Loading data from API...</p>; // Conditional rendering for loading [cite: 37]
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Exercise 3: API Fetching</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li> // Display data dynamically [cite: 36, 40]
        ))}
      </ul>
    </div>
  );
}