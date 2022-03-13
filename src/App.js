import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import DarkMode from "./components/DarkMode/DarkMode";
import Navbar from "./components/Navbar/Navbar";
import TopContainer from "./components/TopContainer/TopContainer";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home"

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
      <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} exact/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        {/* </Route> */}
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
