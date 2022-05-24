import React from "react";
import "./App.css";
import Bord from "./components/Board";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="playground">
      <Heading />
      <Bord />
    </div>
  );
}

export default App;