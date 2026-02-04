import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";

const App = () => {
  const [message, setMessage] = useState("Welcome to Render Component React!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <ButtonCounter />
    </div>
  );
};

export default App;
