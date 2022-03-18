import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DarkMode from "./components/DarkMode/DarkMode";
import Navbar from "./components/Navbar/Navbar";
import Graphics from "./Pages/Graphics/Graphics";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(false);

  // toggling dark mode on or off
  function setMode() {
    setDarkmode((i) => !i);
  }

  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <div className="appWrap">
        <main className={darkmode ? "appWrap darkModeOn" : "appWrap"}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/About" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/graphics" element={<Graphics />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <DarkMode handleClick={setMode} darkmode={darkmode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
