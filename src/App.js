import "./App.css";
import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../src/components/Loading/Loading";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Home = lazy(() => import("./Pages/Home/Home"));
const Graphics = lazy(() => import("./Pages/Graphics/Graphics"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const CharicatureIMG = lazy(() =>
  import("./components/Portfolio/CharicatureIMG/CharicatureIMG")
);
const PocketIMG = lazy(() =>
  import("./components/Portfolio/PocketIMG/PocketIMG")
);
const PopArtIMG = lazy(() =>
  import("./components/Portfolio/PopArtIMG/PopArtIMG")
);
const PresidentIMG = lazy(() =>
  import("./components/Portfolio/PresidentIMG/PresidentIMG")
);
const RandomIMG = lazy(() =>
  import("./components/Portfolio/RandomIMG/RandomIMG")
);
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
      <main className="appWrap">
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* <Route path="/" element={<Home nav={nav} />} exact /> */}
            <Route path="/" element={<LandingPage nav={nav} />} exact />
            <Route path="/About" element={<About nav={nav} />} exact />
            <Route path="/contact" element={<Contact nav={nav} />} exact />
            <Route
              path="/graphics"
              element={
                <Graphics nav={nav} /> //darkmode={darkmode} setMode={setMode} />
              }
              exact
            />
            <Route
              path="/CharicaturesGraphics"
              element={
                <CharicatureIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/PocketGraphics"
              element={
                <PocketIMG nav={nav} darkmode={darkmode} setMode={setMode} />
              }
              exact
            />
            <Route
              path="/PopArtGraphics"
              element={
                <PopArtIMG nav={nav} darkmode={darkmode} setMode={setMode} />
              }
              exact
            />
            <Route
              path="/PresidentGraphics"
              element={
                <PresidentIMG nav={nav} darkmode={darkmode} setMode={setMode} />
              }
              exact
            />
            <Route
              path="/RandomGraphics"
              element={
                <RandomIMG nav={nav} darkmode={darkmode} setMode={setMode} />
              }
              exact
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
