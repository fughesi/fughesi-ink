import React, { useEffect, useState } from "react";
import Fire from "../../images/Icons/Fire"
import IG from "../../images/Icons/IG"
import FB from "../../images/Icons/FB"
import "./TopContainer.css";

export default function TopContainer() {
  // state variables
  const [offsetY, setOffsetY] = useState(0);
  // callback function to get page location in Y axis
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="topContainer">
      <header className="showcase">
        <h1 style={{ transform: `translateY(${offsetY * 0.25}px)` }}>Your web presence</h1>
        <p style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          nesciunt quia vero ab repudiandae sed incidunt ad laboriosam
          assumenda, autem temporibus officiis suscipit nostrum consequatur
          labore nobis dolorum velit dignissimos consequuntur delectus
          reprehenderit quaerat quae corporis quod. Repellendus velit veniam
          qui, illo est iusto nulla, consequatur perferendis deserunt, ad vitae.
        </p>
        <a
          href="#"
          className="btn"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          Read More
        </a>
      </header>
      <div className="topbox topboxA">
          <IG width={300} />
          <FB width={300} />
        <h4>Membership</h4>
        <p className="price">$199/mo</p>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
      <div className="topbox topboxB">
        <h4>Pro Membership</h4>
        <p className="price">$299/mo</p>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
    </section>
  );
}
