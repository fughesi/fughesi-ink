import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
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
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  ); //-------- uses local storage to set and retrieve dark mode boolean -------
  const [blur, setBlur] = useState(false); //toggles blur on page
  const [cart, setCart] = useLocalStorage("cart", ""); //manages the cart
  const [width, setWidth] = useState(window.innerWidth); //tracks window width
  const breakpoint1 = 475;
  const breakpoint2 = 767;
  const breakpoint3 = 1023;

  // tracks window width as breakpoint for Navbar ------------- setWidth
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [window.innerWidth]);

  // toggling dark mode on or off -------------- SetDarkMode
  function setMode() {
    setDarkmode((i) => {
      return !i;
    });
  }

  // ---------- add item to cart and local storage -------------- addToCart, setCart
  function addToCart(item) {
    setCart([...cart, item]);
  }

  // adds dark mode to local storage when state changes  ----- dark mode local storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkmode));
  }, [darkmode]);

  // toggle state to update page blur ---------- ToggleBlur, setBlur
  function toggleBlur() {
    setBlur((i) => !i);
  }

  //changes accent color(s) different depending on if darkmode is on
  const DM = document.documentElement.style;
  useEffect(() => {
    if (darkmode === true) {
      DM.setProperty("--color6", "#0d96d6");
      DM.setProperty("color-scheme", "dark");
      DM.setProperty("--textInset", "initial");
    } else {
      DM.setProperty("--color6", "#ff8c00");
      DM.setProperty("color-scheme", "light");
      DM.setProperty("--textInset", "2px 3px 4px #fff, 0 0 0 #000");
    }
  }, [darkmode]);

  //######################## RETURN ################################
  return (
    <BrowserRouter>
      <SplashPage />

      <main className={`App ${darkmode ? "darkModeOn" : ""}`}>
        <Suspense fallback={<LoadingPage />}>
          <Navbar handleClick={toggleBlur} />

          {/* #################### all of the routes #################### */}
          <Routes>
            {/* ---------------------------- pages ------------------------------- */}
            <Route path="/" element={<IndexPage blur={blur} />} />
            <Route path="/FAQ" element={<FAQPage blur={blur} />} />
            <Route path="/Contact" element={<ContactPage blur={blur} />} />
            <Route
              path="/Confirmation"
              element={<ConfirmOrderPage blur={blur} />}
            />
            <Route
              path="/ShoppingCart"
              element={<ShoppingCartPage blur={blur} cart={cart} />}
            />

            {/* ---------------------------- graphics ------------------------ */}
            <Route path="/Inventory" element={<InventoryPage blur={blur} />}>
              <Route
                path="BHGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"BlackHistory"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="CatGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"CatCartoon"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="DogGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"DogCartoon"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="DragonGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"DragonCartoon"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="MonsterGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"MonsterCartoon"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="SnakeGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"SnakeCartoon"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="CharicatureGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"Charicatures"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="PocketGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"Pocket"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="PopArtGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"PopArt"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="PresidentGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"President"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="RandomGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"Random"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
              <Route
                path="SuperHeroGraphics"
                element={
                  <PortfolioComponent
                    blur={blur}
                    darkmode={darkmode}
                    category={"SuperHero"}
                    addToCart={(i) => addToCart(i)}
                  />
                }
                exact
              />
            </Route>
          </Routes>

          {/* -------------------- menu bar for mobile ------------------------ */}
          {width < breakpoint3 && (
            <FooterMobile darkmode={darkmode} setMode={setMode} />
          )}

          <section aria-label="shirt + heart icons at bottom of every page">
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
