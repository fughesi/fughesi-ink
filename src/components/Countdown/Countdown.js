import React, { useState, useRef, useEffect } from "react";
import "./Countdown.css";

export default function Countdown(props) {
  // state variables
  const [day, setDay] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 18, 2022 04:28:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setDay(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <main id="countdownMain">
      <section className="timerTable">
        <div>
          <div className="BG">
            <span className="time">{day}</span>
          </div>
          <p>DAYS</p>
        </div>
        <div>
          <div className="BG">
            <span className="time">{hours}</span>
          </div>
          <p>HOURS</p>
        </div>
        <div>
          <div className="BG">
            <span className="time">{minutes}</span>
          </div>
          <p>MINUTES</p>
        </div>
        <div>
          <div className="BG">
            <span className="time">{seconds}</span>
          </div>
          <p>SECONDS</p>
        </div>
      </section>
    </main>
  );
}
