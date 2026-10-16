import { useInput } from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

function Login() {
  const userInput = useInput();

  const {setUser} = useContext(UserContext);

  const handleLogin = (e) =>{
    e.preventDefault();

    setUser({name: userInput.value, signedIn: true});
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={userInput.value}
        onChange={userInput.onChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
