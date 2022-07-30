import { useState } from "react";
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [message, setMessage] = useState();
  const handleClick = () => {
    if (password === confirmPassword) {
      setMessage("password match");
    } else {
      setMessage("password did not match");
    }
  };

  return (
    <div className="App">
      <label>password : </label>
      <input
        value={password}
        type="password"
        onChnage={(e) => setPassword(e.target.value)}
      />
      <br />
      <label>confirmPassword : </label>
      <input
        value={confirmPassword}
        type="password"
        onChange={(e) => setconfirmPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleClick}>match</button>
      {password}
      {confirmPassword}
      {message}
    </div>
  );
}
