import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Countdown from "./components/Countdown/Countdown";
import Socials from "./components/Socials/Socials";

function App() {

  return (
    <main className="appWrap">
      <Header />
      <Countdown />
      <Socials />
    </main>
  );
}

export default App;
