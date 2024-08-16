import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    fetch("https://numbers.messagebird.com")
      .then((response) => response.json())
      .then((data) => setNumbers(data));
  }, []);

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
