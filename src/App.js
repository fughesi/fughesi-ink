import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// ############################# Pages imports ##############################
import {
  LoadingPage,
  ContactPage,
  FAQPage,
  IndexPage,
  InventoryPage,
  SplashPage,
} from "./pages/_Pages";

// ############################ JSON imports for graphics ##########################
import Portfolio from "./components/portfolio/PortfolioIMG";
import {
  BH,
  Cat,
  Dog,
  Dragon,
  Monster,
  Snake,
  Charicature,
  Pocket,
  PopArt,
  President,
  Random,
  SuperHero,
} from "./JSON/__exportAllJSON";

// ############################# icons ##############################

import Tshirt from "./resources/icons/Tshirt";
import Heart from "./resources/icons/Heart";

// ############################# components ##############################
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const FooterMobile = lazy(() =>
  import("./components/footerMobile/FooterMobile")
);

// ################################ Start of function ########################
function App() {
  // variables
  const [nav, setNav] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [width, setWidth] = useState(window.innerWidth);
  // const breakpoint1 = 424;
  // const breakpoint2 = 767;
  // const breakpoint3 = 1023;

  // tracks window width as breakpoint for Navbar ------------- setWidth
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // toggling dark mode on or off -------------- SETMODE
  function setMode() {
    setDarkmode((i) => {
      localStorage.setItem("darkMode", JSON.stringify(!i));
      return !i;
    });
  }

  // toggle state to update navbar ---------- TOGGLER
  function toggler() {
    setNav((i) => !i);
  }

  // callback function to get page location in Y axis && parallax effect ----- HANDLESCROLL
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //######################## RETURN ###################################
  return (
    <BrowserRouter>
      <SplashPage />
      <main className="App">
        <Suspense fallback={<LoadingPage />}>
          <Navbar handleClick={toggler} />

          {/* ###################### all of the routes ######################### */}
          <Routes>
            {/* -------- pages ---------------- */}

            <Route
              path="/"
              element={
                <IndexPage
                  nav={nav}
                  offsetY={offsetY}
                  handleScroll={handleScroll}
                />
              }
            />
            <Route path="/Inventory" element={<InventoryPage nav={nav} />} />
            <Route path="/FAQ" element={<FAQPage nav={nav} />} />
            <Route path="/Contact" element={<ContactPage nav={nav} />} />

            {/* -------- graphics ---------------- */}
            <Route
              path="/BHGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={BH} />
              }
              exact
            />
            <Route
              path="/CatGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Cat} />
              }
              exact
            />
            <Route
              path="/DogGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Dog} />
              }
              exact
            />
            <Route
              path="/DragonGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Dragon} />
              }
              exact
            />
            <Route
              path="/MonsterGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Monster} />
              }
              exact
            />
            <Route
              path="/SnakeGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Snake} />
              }
              exact
            />
            <Route
              path="/CharicatureGraphics"
              element={
                <Portfolio
                  nav={nav}
                  darkmode={darkmode}
                  portfolio={Charicature}
                />
              }
              exact
            />
            <Route
              path="/PocketGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Pocket} />
              }
              exact
            />
            <Route
              path="/PopArtGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={PopArt} />
              }
              exact
            />
            <Route
              path="/PresidentGraphics"
              element={
                <Portfolio
                  nav={nav}
                  darkmode={darkmode}
                  portfolio={President}
                />
              }
              exact
            />
            <Route
              path="/RandomGraphics"
              element={
                <Portfolio nav={nav} darkmode={darkmode} portfolio={Random} />
              }
              exact
            />
            <Route
              path="/SuperHeroGraphics"
              element={
                <Portfolio
                  nav={nav}
                  darkmode={darkmode}
                  portfolio={SuperHero}
                />
              }
              exact
            />
          </Routes>

          <FooterMobile darkmode={darkmode} setMode={setMode} />

          <section aria-label="bottomSig">
            <div className="bottomSig">
              <Tshirt width={12} />
              <span className="plussign">+</span>
              <Heart width={11} />
            </div>
          </section>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
