import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <section className="info">
      <img src="https://source.unsplash.com/random/500x500" alt="" />
      <div>
        <h2>Your Business On The Web</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          repudiandae perspiciatis sed adipisci officiis ad delectus nesciunt,
          veniam, ea laborum quo quis repellendus. Odio quas, sequi magni natus
          quos repellat maxime expedita consectetur dolor ipsa assumenda, in
          alias accusamus harum!
        </p>
        <a href="#" className="btn">
          Learn More
        </a>
      </div>
    </section>
  );
}
