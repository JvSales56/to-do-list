import { useState, useEffect, useContext } from "react";
import { useInput } from "../hooks/useInput.jsx";
import Chore from "./Chore.jsx";
import { UserContext } from "../contexts/UserContext.jsx";

const API_URL =
  "https://crudcrud.com/api/6c9269827bfd4126907193db3eaa89ef/chores";

function ChoreList() {
  const [chores, setChores] = useState([]);
  const chore = useInput();
  const { user } = useContext(UserContext);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setChores(data))
      .catch((error) => console.error("Error fetching chores:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (chore.value === "") return;

    //Post the new chore to the API
    const add = { user: user.name, text: chore.value };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    })
      .then((response) => response.json())
      .then((createdChore) => {
        setChores((currentChores) => [...currentChores, createdChore]);
        chore.clear();
      })
      .catch((error) => console.error("Error adding new chore:", error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new chore"
          value={chore.value}
          onChange={chore.onChange}
        />
        <button type="submit">Add Chore</button>
      </form>
      <ul>
        {chores
          .filter((choreItem) => choreItem.user === user.name)
          .map((choreItem) => (
            <Chore key={choreItem._id} text={choreItem.text} />
          ))}
      </ul>
    </>
  );
}

export default ChoreList;
