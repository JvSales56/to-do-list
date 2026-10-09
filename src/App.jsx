import { useState, useEffect } from "react";
import Chore from "./components/Tarefa.jsx";

function App() {

  const chores = ["Learn React", "Learn JavaScript", "Learn HTML", "Learn CSS"];

  return (
    <main>
      <h1>To do List</h1>
      <ul>
        {chores.map(chores => <Chore text={chores} />)}
      </ul>
    </main>
  );
}

export default App;
