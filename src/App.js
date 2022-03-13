import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import DarkMode from "./components/DarkMode/DarkMode";
import Navbar from "./components/Navbar/Navbar";
import TopContainer from "./components/TopContainer/TopContainer";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import About from "./components/About/About";

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(false);

  // toggling dark mode on or off
  function setMode() {
    setDarkmode((i) => !i);
  }

  //make sure the page loads from the top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={App} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
      <main className={darkmode ? "appWrap darkModeOn" : "appWrap"}>
        {/* <div className="comingSoon"><h1>COMING SOON...</h1></div> */}
        <Navbar />
        <TopContainer />
        <Cards />
        <Info />
        <Portfolio />
        <Footer />
        <DarkMode handleClick={setMode} darkmode={darkmode} />
      </main>
    </BrowserRouter>
  );
}

export default App;
