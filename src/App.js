import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../src/components/Loading/Loading";
import DarkMode from "./components/DarkMode/DarkMode";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Graphics = lazy(() => import("./Pages/Graphics/Graphics"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(false);

  // toggling dark mode on or off
  function setMode() {
    setDarkmode((i) => !i);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main className={darkmode ? "appWrap darkModeOn" : "appWrap"}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/About" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/graphics" element={<Graphics />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <DarkMode handleClick={setMode} darkmode={darkmode} />
    </BrowserRouter>
  );
}

export default App;
