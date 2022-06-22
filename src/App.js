import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// ########################## Pages / Components imports ##########################
import {
  PortfolioComponent,
  LoadingPage,
  ContactPage,
  FAQPage,
  IndexPage,
  InventoryPage,
  SplashPage,
  ShoppingCartPage,
  ConfirmOrderPage,
} from "./pages/_Pages";

// ############################# icons ##############################
import Tshirt from "./resources/icons/Tshirt";
import Heart from "./resources/icons/Heart";

// ######################## navbar and footer components ########################
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const FooterMobile = lazy(() =>
  import("./components/footerMobile/FooterMobile")
);

// ############################## ---Start of App.js --- ########################
function App() {
  // variables
  const [blur, setBlur] = useState(false); //toggles blur on page
  const [offsetY, setOffsetY] = useState(0); //tracks scrolling
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  ); //uses local storage to set and retrieve dark mode boolean
  const [width, setWidth] = useState(window.innerWidth); //tracks window width
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

  // toggling dark mode on or off -------------- SetDarkMode
  function setMode() {
    setDarkmode((i) => {
      localStorage.setItem("darkMode", JSON.stringify(!i));
      return !i;
    });
  }

  // toggle state to update page blur ---------- TOGGLER
  function toggleBlur() {
    setBlur((i) => !i);
  }

  // get page location in Y axis && parallax effect ----- HANDLESCROLL
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //######################## RETURN ################################
  return (
    <BrowserRouter>
      <SplashPage />

      <main className="App">
        <Suspense fallback={<LoadingPage />}>
          <Navbar handleClick={toggleBlur} />

          {/* #################### all of the routes #################### */}
          <Routes>
            {/* ---------------------------- pages ------------------------------- */}
            <Route
              path="/"
              element={
                <IndexPage
                  blur={blur}
                  offsetY={offsetY}
                  handleScroll={handleScroll}
                />
              }
            />
            <Route path="/Inventory" element={<InventoryPage blur={blur} />} />
            <Route path="/FAQ" element={<FAQPage blur={blur} />} />
            <Route path="/Contact" element={<ContactPage blur={blur} />} />
            <Route
              path="/Confirmation"
              element={<ConfirmOrderPage blur={blur} />}
            />
            <Route
              path="/ShoppingCart"
              element={<ShoppingCartPage blur={blur} />}
            />

            {/* ---------------------------- graphics ------------------------ */}
            <Route
              path="/BHGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"BlackHistory"}
                />
              }
              exact
            />
            <Route
              path="/CatGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"CatCartoon"}
                />
              }
              exact
            />
            <Route
              path="/DogGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"DogCartoon"}
                />
              }
              exact
            />
            <Route
              path="/DragonGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"DragonCartoon"}
                />
              }
              exact
            />
            <Route
              path="/MonsterGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"MonsterCartoon"}
                />
              }
              exact
            />
            <Route
              path="/SnakeGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"SnakeCartoon"}
                />
              }
              exact
            />
            <Route
              path="/CharicatureGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"Charicatures"}
                />
              }
              exact
            />
            <Route
              path="/PocketGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"Pocket"}
                />
              }
              exact
            />
            <Route
              path="/PopArtGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"PopArt"}
                />
              }
              exact
            />
            <Route
              path="/PresidentGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"President"}
                />
              }
              exact
            />
            <Route
              path="/RandomGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"Random"}
                />
              }
              exact
            />
            <Route
              path="/SuperHeroGraphics"
              element={
                <PortfolioComponent
                  blur={blur}
                  darkmode={darkmode}
                  category={"SuperHero"}
                />
              }
              exact
            />
          </Routes>

          {/* -------------------- menu bar for mobile ------------------------ */}
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
