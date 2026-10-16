import { useState } from "react";
import ChoreList from "./components/ChoreList.jsx";
import Login from "./components/Login.jsx";
import { UserContext } from "./contexts/UserContext.jsx";

function App() {
  const [user, setUser] = useState({ name: null, signedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main>
        <h1>{user.name}'s To-Do List App</h1>
        {user.signedIn ? <ChoreList /> : <Login />}
      </main>
    </UserContext.Provider>
  );
}

export default App;
