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
} from "./pages/Pages";
// ############################# Portfolio imports ##############################
import {
  BlackHistoryIMG,
  CartoonCatIMG,
  CartoonDogIMG,
  CartoonDragonIMG,
  CartoonMonsterIMG,
  CartoonSnakeIMG,
  CharicatureIMG,
  PocketIMG,
  PopArtIMG,
  PresidentIMG,
  RandomIMG,
  SuperHeroIMG,
} from "./components/portfolio/_Portfolio";

// ############################# components ##############################
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const FooterMobile = lazy(() =>
  import("./components/footerMobile/FooterMobile")
);

// ################################ Start of function ########################
function App() {
  // variables
  const [nav, setNav] = useState(false);
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [width, setWidth] = useState(window.innerWidth);
  const [offsetY, setOffsetY] = useState(0);
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
      {/* <SplashPage /> */}
      <main className="App">
        <Suspense fallback={<LoadingPage />}>
          <Navbar handleClick={toggler} />

          {/* ###################### all of the routes ######################### */}
          <Routes>
            {/* -------- pages ---------------- */}

            <Route path="/" element={<IndexPage nav={nav} />} />
            <Route path="/Inventory" element={<InventoryPage nav={nav} />} />
            <Route path="/FAQ" element={<FAQPage nav={nav} />} />
            <Route path="/Contact" element={<ContactPage nav={nav} />} />

            {/* -------- graphics ---------------- */}
            <Route
              path="/CharicaturesGraphics"
              element={<CharicatureIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/BlackHistoryGraphics"
              element={<BlackHistoryIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/CartoonCatGraphics"
              element={<CartoonCatIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/CartoonDogGraphics"
              element={<CartoonDogIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/CartoonDragonGraphics"
              element={<CartoonDragonIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/CartoonMonsterGraphics"
              element={<CartoonMonsterIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/CartoonSnakeGraphics"
              element={<CartoonSnakeIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/PocketGraphics"
              element={<PocketIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/PopArtGraphics"
              element={<PopArtIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/PresidentGraphics"
              element={<PresidentIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/RandomGraphics"
              element={<RandomIMG nav={nav} darkmode={darkmode} />}
              exact
            />
            <Route
              path="/SuperHeroGraphics"
              element={<SuperHeroIMG nav={nav} darkmode={darkmode} />}
              exact
            />
          </Routes>

          <FooterMobile darkmode={darkmode} setMode={setMode} />
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
