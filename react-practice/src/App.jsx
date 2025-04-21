import { useState } from "react";
import "./App.css";

function App() {
  const [personName, setPersonName] = useState("");

  return (
    <>
      <h1>Hello {personName}</h1>
      <input type='text' onChange={(e) => setPersonName(e.target.value)} />
    </>
  );
}

export default App;
