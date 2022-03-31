import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../src/components/Loading/Loading";
import LandingPage from "./Pages/LandingPage/LandingPage"
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
  const [nav, setNav] = useState(false);

  // toggling dark mode on or off
  function setMode() {
    setDarkmode((i) => !i);
  }

  // toggle state to update navbar
  function toggler() {
    setNav((i) => !i);
  }

  return (
    <BrowserRouter>
      <Navbar toggler={toggler} nav={nav} />
      <main className={darkmode ? "appWrap darkModeOn" : "appWrap"}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LandingPage nav={nav} />} exact />
            <Route path="/About" element={<About nav={nav} />} exact />
            <Route path="/contact" element={<Contact nav={nav} />} exact />
            <Route path="/graphics" element={<Graphics nav={nav} />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
