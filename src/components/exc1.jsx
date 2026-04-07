export default function Exercise1() {
  const name = "Madhura Hiremath"; //
  const dept = "CSE"; //
  const year = "3rd Year"; //
  const section = "A";

  return (
    <div style={{ border: '2px solid black', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h2>Exercise 1: Student Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {dept}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Section:</strong> {section}</p>
    </div>
  );
}
