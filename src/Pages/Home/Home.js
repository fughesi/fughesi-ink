import React, { useEffect } from "react";
import TopContainer from "../../components/TopContainer/TopContainer";
import Cards from "../../components/Cards/Cards";
import Info from "../../components/Info/Info";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <TopContainer />
      <Cards />
      <Info />
    </div>
  );
}
