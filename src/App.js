import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// ############################# components ##############################
import Splash from "./pages/splashPage/SplashPage";
import Loading from "./../src/components/loading/Loading";
// ############################## Pages - all lazy loaded ######################
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const FAQPage = lazy(() => import("./pages/faqPage/FAQPage"));
const ContactPage = lazy(() => import("./pages/contact/Contact"));
const InventoryPage = lazy(() => import("./pages/inventoryPage/inventoryPage"));
const BlackHistoryIMG = lazy(() =>
  import("./../src/components/portfolio/BlackHistoryIMG")
);
const CartoonCatIMG = lazy(() =>
  import("./../src/components/portfolio/CartoonCatIMG")
);
const CartoonDogIMG = lazy(() =>
  import("./../src/components/portfolio/CartoonDogIMG")
);
const CartoonDragonIMG = lazy(() =>
  import("./../src/components/portfolio/CartoonDragonIMG")
);
const CartoonMonsterIMG = lazy(() =>
  import("./../src/components/portfolio/CartoonMonsterIMG")
);
const CartoonSnakeIMG = lazy(() =>
  import("./../src/components/portfolio/CartoonSnakeIMG")
);
const CharicatureIMG = lazy(() =>
  import("./../src/components/portfolio/CharicatureIMG")
);
const PocketIMG = lazy(() => import("./../src/components/portfolio/PocketIMG"));
const PopArtIMG = lazy(() => import("./../src/components/portfolio/PopArtIMG"));
const PresidentIMG = lazy(() =>
  import("./../src/components/portfolio/PresidentIMG")
);
const RandomIMG = lazy(() => import("./../src/components/portfolio/RandomIMG"));
const SuperHeroIMG = lazy(() =>
  import("./../src/components/portfolio/SuperHeroIMG")
);
const FooterMobile = lazy(() =>
  import("./components/footerMobile/FooterMobile")
);

// ################################ Start of function ########################
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

  //######################## RETURN ###################################
  return (
    <BrowserRouter>
      {/* <Splash /> */}
      <main className="App">
        <Suspense fallback={<Loading />}>
          <Navbar handleClick={toggler} />

          {/* ###################### all of the routes ######################### */}
          <Routes>
            {/* -------- pages ---------------- */}

            <Route path="/" element={<InventoryPage nav={nav} />} />
            <Route path="/FAQ" element={<FAQPage nav={nav} />} />
            <Route path="/Contact" element={<ContactPage nav={nav} />} />
            
            {/* -------- graphics ---------------- */}
            <Route
              path="/CharicaturesGraphics"
              element={
                <CharicatureIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/BlackHistoryGraphics"
              element={
                <BlackHistoryIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/CartoonCatGraphics"
              element={
                <CartoonCatIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/CartoonDogGraphics"
              element={
                <CartoonDogIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/CartoonDragonGraphics"
              element={
                <CartoonDragonIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/CartoonMonsterGraphics"
              element={
                <CartoonMonsterIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/CartoonSnakeGraphics"
              element={
                <CartoonSnakeIMG
                  nav={nav}
                  darkmode={darkmode}
                />
              }
              exact
            />
            <Route
              path="/PocketGraphics"
              element={
                <PocketIMG nav={nav} darkmode={darkmode} />
              }
              exact
            />
            <Route
              path="/PopArtGraphics"
              element={
                <PopArtIMG nav={nav} darkmode={darkmode} />
              }
              exact
            />
            <Route
              path="/PresidentGraphics"
              element={
                <PresidentIMG nav={nav} darkmode={darkmode} />
              }
              exact
            />
            <Route
              path="/RandomGraphics"
              element={
                <RandomIMG nav={nav} darkmode={darkmode} />
              }
              exact
            />
            <Route
              path="/SuperHeroGraphics"
              element={
                <SuperHeroIMG nav={nav} darkmode={darkmode} />
              }
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
