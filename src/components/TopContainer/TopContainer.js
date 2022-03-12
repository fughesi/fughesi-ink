import React from "react";
import "./TopContainer.css";

export default function TopContainer() {
  return (
    <section className="topContainer">
      <header className="showcase">
        <h1>Your web presence</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          nesciunt quia vero ab repudiandae sed incidunt ad laboriosam
          assumenda, autem temporibus officiis suscipit nostrum consequatur
          labore nobis dolorum velit dignissimos consequuntur delectus
          reprehenderit quaerat quae corporis quod. Repellendus velit veniam
          qui, illo est iusto nulla, consequatur perferendis deserunt, ad vitae.
        </p>
        <a href="#" class="btn">
          Read More
        </a>
      </header>
      <div className="topbox topboxA">
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
