const StudentCard = (props) => (
  <div style={{ border: '1px solid blue', margin: '10px', padding: '10px', borderRadius: '5px' }}>
    <h3>{props.name}</h3>
    <p>Dept: {props.dept} | Marks: {props.marks}</p>
  </div>
);

export default function Exercise2() {
  return (
    <div>
      <h2>Exercise 2: Student Cards</h2>
      <StudentCard name="Madhura Hiremath" dept="CSE" marks="95" />
      <StudentCard name="Parth" dept="CSE" marks="98" />
    </div>
  );
}