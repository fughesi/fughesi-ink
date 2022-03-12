import React, { useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import DarkMode from "./components/DarkMode/DarkMode";
import Navbar from "./components/Navbar/Navbar";
import TopContainer from "./components/TopContainer/TopContainer";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(false);

  function setMode() {
    setDarkmode((i) => !i);
  }

  return (
    <main className="appWrap">
      <Navbar />
      <TopContainer />
      <Cards />
      <Info />
      <Portfolio />
      <Footer />
      <DarkMode handleClick={setMode} darkmode={darkmode} />
    </main>
  );
}

export default App;
