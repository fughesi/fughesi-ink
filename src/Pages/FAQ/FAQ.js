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
        <h1>Frequently Asked Questions</h1>
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
                  The Concert Tee is your budget option with a more relaxed fit
                  while maintaining a super soft, yet traditional cotton feel.
                  The Unisex Triblend comes in as the more premium shirt with
                  exceptional softness and a tapered fit. This shirt leverages
                  the stretch of polyesther, the traditional comfort of cotton
                  and the smoothness of rayon (synthetic silk).
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
                  transfer toner" which utilizes a printer with modified toner,
                  as well as a specialized carrier sheet. The carrier sheet with
                  the toner is then pressed at high temperature and pressure to
                  another specialized sheet that contains the adhesive polymer.
                  Once that process takes place and the sheets are separated,
                  the original carrier sheet now contains the polymer and toner
                  combined. This post-processed sheet is now situated on the
                  garment and pressed in the same fashion as the previous step
                  (high temperature and pressure).
                  <br />
                  <br />
                  The final step involves a third press with even higher
                  pressure and this is where we have the option to apply one of
                  three different finishing mats which will help seal the ink
                  into the garment while giving either a matte look or a more
                  glossy finish.
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
                    <li>Wash in cold or warm water</li>
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
                  <Link to="/Graphics" className="FAQlink">
                    Graphics
                  </Link>{" "}
                  tab that can be selected and printed to any of your shirts,
                  however you are free to specify any color changes or other
                  modifications or adding of additional text.
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
                <p>
                  Yes. Contact Fughesi Ink via our form in the{" "}
                  <Link to="/Contact" className="FAQlink">
                    Contact
                  </Link>{" "}
                  tab and upload a <strong>high quality</strong> image that can
                  retain that quality when resized to the desired height and
                  width.
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={6}
          >
            Shipping method and time
            {hide == 6 && (
              <div className="answer">
                <p>
                  Your custom garment will ship in a flexible poly-mailer that
                  is resistant to water and other environmental debris and
                  produces minimal waste. This item should easily fit inside of
                  most mailboxes and does not require a signature upon delivery.
                  <br />
                  <br />
                  Fughesi Ink uses United States Postal Service first-class
                  ground delivery for the most cost effective and reliable
                  service. Typical estimates of delivery time (
                  <a
                    href="https://postcalc.usps.com/Calculator"
                    alt="USPS postage calculator and shipping costs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="FAQlink"
                  >
                    per USPS website
                  </a>
                  ) are 1-3 business days. Items ship from Zip code 33606.
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={7}
          >
            Return policy
            {hide == 7 && (
              <div className="answer">
                <p>
                  Due to the nature of providing custom and permanent artwork on
                  new garments Fughesi Ink is unable to provide a return on
                  orders. If there are any questions or concerns reguarding an
                  order you can contact Fughesi Ink via our form in the{" "}
                  <Link to="/Contact" className="FAQlink">
                    Contact
                  </Link>{" "}
                  tab which will deliver the message via email, or you can
                  contact Steven directly via{" "}
                  <a
                    href="https://wa.me/message/PKTZG4VTREDRN1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="FAQlink"
                  >
                    WhatsApp
                  </a>{" "}
                  instant messenger.
                </p>
              </div>
            )}
          </div>
          <div
            className="accordionItem"
            onClick={(index) => setHide(index.target.id)}
            id={8}
          >
            How long does it take
            {hide == 8 && (
              <div className="answer">
                <p>
                  Provided that the size, color and style of shirt is in stock
                  Fughesi Ink can have the custom apparel printed and shipped
                  the same day of the order.
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
