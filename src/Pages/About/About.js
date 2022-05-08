import React, { useState, useEffect } from "react";
import Thanks from "./../Thanks/Thanks";
import PayPal from "../../components/PayPal/PayPal";
import { nanoid } from "nanoid";
import "./About.css";

export default function About({ nav }) {
  // state variables
  const [hide, setHide] = useState(null);
  console.log(hide);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={nav ? "aboutMain blur" : "aboutMain"}>
      <section className="accordionSection" aria-label="FAQ section">
        <div className="accordionContainer">
          <div
            className="accordionItem"
            onClick={(index) =>
              setHide(index.target.__reactFiber$cn4btg0dg0w.key)
            }
            key={1}
          >
            FAQ1 - place icon here
            {hide == 1 && (
              <div className="answer">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, porro minima cupiditate voluptates placeat quo dolor
                  fugiat harum debitis earum?
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) =>
              setHide(index.target.__reactFiber$cn4btg0dg0w.key)
            }
            key={2}
          >
            FAQ1 - place icon here
            {hide == 2 && (
              <div className="answer">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, porro minima cupiditate voluptates placeat quo dolor
                  fugiat harum debitis earum?
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) =>
              setHide(index.target.__reactFiber$cn4btg0dg0w.key)
            }
            key={3}
          >
            FAQ1 - place icon here
            {hide == 3 && (
              <div className="answer">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, porro minima cupiditate voluptates placeat quo dolor
                  fugiat harum debitis earum?
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) =>
              setHide(index.target.__reactFiber$cn4btg0dg0w.key)
            }
            key={4}
          >
            FAQ1 - place icon here
            {hide == 4 && (
              <div className="answer">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, porro minima cupiditate voluptates placeat quo dolor
                  fugiat harum debitis earum?
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <Thanks /> */}
      {/* <PayPal /> */}
    </main>
  );
}
