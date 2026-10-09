import { useState, useEffect } from "react";
import Chore from "./components/Chore.jsx";

const API_URL =
  "https://crudcrud.com/api/ee7170db912a425d92f57ec84121b101/chores";

function App() {
  const [chores, setChores] = useState([]);
  const [newChore, setNewChore] = useState("");

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setChores(data))
      .catch((error) => console.error("Error fetching chores:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newChore.trim() === "") return;

    //Post the new chore to the API
    const add = { text: newChore.trim() };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    })
      .then((response) => response.json())
      .then((createdChore) => {
        setChores([...chores, createdChore]);
        setNewChore("");
      })
      .catch((error) => console.error("Error adding new chore:", error));
  };

  return (
    <main>
      <h1>To-Do List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new chore"
          value={newChore}
          onChange={(e) => setNewChore(e.target.value)}
        />
        <button type="submit">Add Chore</button>
      </form>
      <ul>
        {chores.map((chores) => (
          <Chore key={chores._id} text={chores.text} />
        ))}
      </ul>
    </main>
  );
}

export default App;
