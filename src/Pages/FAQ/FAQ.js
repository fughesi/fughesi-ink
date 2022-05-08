import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Thanks from "../Thanks/Thanks";
import PayPal from "../../components/PayPal/PayPal";
import { nanoid } from "nanoid";
import "./FAQ.css";

export default function About({ nav }) {
  // state variables
  const [hide, setHide] = useState(null);

  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={nav ? "aboutMain blur" : "aboutMain"}>
      <section className="accordionSection" aria-label="FAQ section">
        <div className="accordionContainer">
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={1}
          >
            Quality of the shirts
            {hide == 1 && (
              <div className="answer">
                <p>
                  Fughesi Ink wants you to enjoy the feel and fit of the shirts
                  that you purchase, and so with quality in mind we decided to
                  stock two different brands of shirts to accommodate everyone's
                  style and budget!
                </p>
                <div className="FAQdiv">
                  <p className="FAQitems">"Concert Tee" by District</p>
                  <p className="product">4.5-ounce, 100% soft spun cotton</p>
                  <p className="FAQitems">"Unisex Triblend" by Bella+Canvas</p>
                  <p className="product">
                    3.8-ounce, 50% poly, 25% rayon, 25% combed and ring spun
                    cotton
                  </p>
                </div>
                <p>
                  The Concert Tee will be your more budget option with a more
                  relaxed fit while maintaining a super soft, yet traditional
                  cotton feel. The Unisex Triblend comes in as the more premium
                  shirt with exceptional softness and a tappered fit. This shirt
                  leverages the stretch of polyesther, the traditional comfort
                  of cotton and the smoothness of Rayon (synthetic silk).
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={2}
          >
            The inking process
            {hide == 2 && (
              <div className="answer">
                <p>
                  Graphics are applied to the shirt using a process called "heat
                  transfer toner" which utilizes a toner printer with modified
                  toner, as well as a specialized carrier sheet. The carrier
                  sheet with the toner is then pressed at high temperature and
                  pressureto another specialized sheet that contains the
                  adhesive. Once that process takes place and the sheets are
                  separated, the original carrier sheet contains the adhesive
                  and toner combined. This post-processed sheet is now situated
                  on the garment and pressed in te same fashion as the previous
                  step (high high and pressure).
                  <br />
                  <br />
                  The final step involves a third press with even higher
                  pressure and this is where we have te option to apply one of
                  three different finishing mats which will help seal the ink
                  into the garment while giving more of a matte look versus a
                  more glossy finish.
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={3}
          >
            Care of the garment{" "}
            {hide == 3 && (
              <div className="answer">
                <p>
                  To maximize the life of the garment and the integrity of the
                  custom graphic there are some recommendations listed by the
                  manufacturers of the commercial inking machines:
                  <br />
                  <br />
                  <ul>
                    <li>Don't wash for at least 48 hours</li>
                    <li>Do not dry clean</li>
                    <li>Wash and dry inside out</li>
                    <li>Choose cold or warm water for washing</li>
                    <li>Use mild detergent</li>
                    <li>Dry on low or hang dry</li>
                    <li>Don’t iron directly on it</li>
                    <li>No bleach or fabric softeners</li>
                  </ul>
                  <br />
                  <span className="smallText">
                    <sup>*</sup>As a general rule, no high heat or harsh
                    chemicals and you should be fine.
                  </span>
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={4}
          >
            Can I customize the graphics
            {hide == 4 && (
              <div className="answer">
                <p>
                  Yes. There are many readily made graphics under the{" "}
                  <Link to="/Graphics">"Graphics" </Link> tab that can be
                  selected and printed to any of your shirts, however you are
                  free to specify any color changes or other modifications or
                  adding of additional text.
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={5}
          >
            Can I submit my own graphics or text
            {hide == 5 && (
              <div className="answer">
                <p>Yes. Contact Fughesi Ink via our form in the <Link to="/Contact">"Contact" </Link> tab and upload a <strong>high quality</strong> image that can be retain that quality when resized to the height and width of the desired size.</p>
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
