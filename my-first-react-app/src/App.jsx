import './App.css';
export default function App() {
  const studentName = 'Gatheesha Nipulma';
  const studentIndex = 'ICT/24/896';
  return (
    <main className="profile">
      <h1>My First React App</h1>
      <p>Name: {studentName}</p>
      <p>Index: {studentIndex}</p>
      <h2>What I want to learn</h2>
      <p>I want to make games so I chose BICT</p>
      <ul><li>Build a web page with React</li><li>Make a game with godot.</li></ul>
    </main>
  );
}