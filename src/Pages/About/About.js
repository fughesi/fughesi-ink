import React, { useState, useEffect } from "react";
import Construction from "../../components/Construction/Construction";
import PayPal from "../../components/PayPal/PayPal";

export default function About({ nav }) {
  // state variables
  const [offsetY, setOffsetY] = useState(0);

  // callback function to get page location in Y axis
  const handleScroll = () => setOffsetY(window.pageYOffset);

  // parallax effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // window to start at top of page on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "aboutMain blur" : "aboutMain"}>
      <Construction />
      {/* <Checkout /> */}
      <PayPal />
    </main>
  );
}
