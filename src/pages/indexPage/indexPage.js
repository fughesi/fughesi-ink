import React, { useEffect } from "react";
import Paypal from './../../components/paypal/PayPal'
import "./indexPage.css";



export default function indexPage({ nav }) {
  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main className={nav ? "indexMain blur" : "indexMain"}><Paypal /></main>;
}
