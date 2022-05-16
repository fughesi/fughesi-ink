import "./App.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../src/components/Loading/Loading";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import NavbarBig from "./components/NavbarBig/NavbarBig";
import Footer from "./components/Footer/Footer";
import Splash from "./Pages/Splash/Splash";
import Thanks from "./Pages/Thanks/Thanks";
const Graphics = lazy(() => import("./Pages/Graphics/Graphics"));
const FAQ = lazy(() => import("./Pages/FAQ/FAQ"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Cancel = lazy(() => import("./Pages/Cancel/Cancel"));
const Success = lazy(() => import("./Pages/Success/Success"));
const CharicatureIMG = lazy(() =>
  import("./components/Portfolio/CharicatureIMG")
);
const PocketIMG = lazy(() => import("./components/Portfolio/PocketIMG"));
const CatCartoonIMG = lazy(() =>
  import("./components/Portfolio/CartoonCatIMG")
);
const DogCartoonIMG = lazy(() =>
  import("./components/Portfolio/CartoonDogIMG")
);
const SnakeCartoonIMG = lazy(() =>
  import("./components/Portfolio/CartoonSnakeIMG")
);
const MonsterCartoonIMG = lazy(() =>
  import("./components/Portfolio/CartoonMonsterIMG")
);
const DragonCartoonIMG = lazy(() =>
  import("./components/Portfolio/CartoonDragonIMG")
);
const PopArtIMG = lazy(() => import("./components/Portfolio/PopArtIMG"));
const PresidentIMG = lazy(() => import("./components/Portfolio/PresidentIMG"));
const RandomIMG = lazy(() => import("./components/Portfolio/RandomIMG"));
const BlackHistoryIMG = lazy(() =>
  import("./components/Portfolio/BlackHistoryIMG")
);
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  //state variables
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [nav, setNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [offsetY, setOffsetY] = useState(0);
  const breakpoint1 = 424;
  const breakpoint2 = 767;
  const breakpoint3 = 1023;

  // tracks window width as breakpoint for Navbar
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // toggling dark mode on or off
  function setMode() {
    setDarkmode((i) => {
      localStorage.setItem("darkMode", JSON.stringify(!i));
      return !i;
    });
  }

  // toggle state to update navbar
  function toggler() {
    setNav((i) => !i);
  }

  // callback function to get page location in Y axis && parallax effect
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <BrowserRouter>
      <Splash />
      {width > breakpoint2 ? (
        <NavbarBig toggler={toggler} offsetY={offsetY} nav={nav} />
      ) : (
        <Navbar toggler={toggler} nav={nav} />
      )}
      <main className="appWrap">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  nav={nav}
                  offsetY={offsetY}
                  handleScroll={handleScroll}
                />
              }
              exact
            />
            <Route path="/FAQ" element={<FAQ nav={nav} />} exact />
            <Route path="/contact" element={<Contact nav={nav} />} exact />
            <Route path="/cancel" element={<Cancel nav={nav} />} exact />
            <Route path="/success" element={<Success nav={nav} />} exact />
            <Route path="/Thanks" element={<Thanks nav={nav} />} exact />
            <Route
              path="/graphics"
              element={<Graphics nav={nav} offsetY={offsetY} />}
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
            <Route
              path="/BlackHistoryGraphics"
              element={
                <BlackHistoryIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/CatCartoonGraphics"
              element={
                <CatCartoonIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/DogCartoonGraphics"
              element={
                <DogCartoonIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/DragonCartoonGraphics"
              element={
                <DragonCartoonIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/MonsterCartoonGraphics"
              element={
                <MonsterCartoonIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
              }
              exact
            />
            <Route
              path="/SnakeCartoonGraphics"
              element={
                <SnakeCartoonIMG
                  nav={nav}
                  darkmode={darkmode}
                  setMode={setMode}
                />
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
