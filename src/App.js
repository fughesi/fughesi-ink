import React, { useState } from "react";
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";
import Designs from "./components/Designs/Designs";

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(true);

  function setMode() {
    setDarkmode((i) => !i);
    console.log(darkmode)
  }

  return (
    <main className="appWrap">
      <Designs />

      <DarkMode handleClick={setMode} darkmode={darkmode} />
    </main>
  );
}

export default App;
