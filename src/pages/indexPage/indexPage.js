import React, { useEffect, useState } from "react";
import indexPageArr from "./indexPageJSON";
import IGtext from "./../../resources/icons/IGtext";
import Loading from "../loadingPage/Loading";
import IGsmall from "../../resources/icons/IGsmall";
// import Video from "./../../resources/videos/girlWalkSlow.mp4";
// import Video from "./../../resources/videos/inkVideoLQ.mov";
// import Video from "./../../resources/videos/inkDrip.mp4";
import "./indexPage.css";

export default function indexPage({ blur, offsetY }) {
  const [IGAPI, setIGAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://graph.instagram.com/5256198047808423/media?fields=id,caption,permalink,media_url&access_token=IGQVJWZAnhDVE1rcGdPcUUtY19nLTVqYUIwdTY3NkxKX3hydjNLQU5xQ0ZAteU5PY0VZAeEZAFVDVBVlFiWHlxZA2JFWkltLTJ2Unl6TFpuMW5fOVJZAc3k0aGE5WmloSWpUZAW5aVWxvQ3FSeWRpZA0lQNndGVgZDZD"; // ----- URL for fughesi_ink IG feed with access token ------

  // start position to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // API function to get photos from fughesi_ink IG page (up to 20) ------- IG photos
  function getAPI() {
    setIsLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let x = [];
        for (let i = 0; i < data.data.length && i < 13; i++) {
          x.push(
            <a
              href={data.data[i].permalink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IGsmall className="IGsmall" />
              <img
                src={data.data[i].media_url}
                alt={data.data[i].caption}
                className="IGphotos"
              />
            </a>
          );
        }
        setIGAPI(x);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  // calling the API function with useEffect
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <main className={blur ? "indexMain blur" : "indexMain"}>
      <section aria-describedby="index page" className="topLandingPage">
        <div
          className="dissapearingInk"
          style={{
            transform: `translateY(${offsetY * 0.075}px)`,
            filter: `blur(${offsetY < 750 ? offsetY * 0.15 : offsetY * 0}px)`,
          }}
        >
          <p className="welcomeTo">WELCOME TO</p>
          <h1>FUGHESI INK</h1>
        </div>
        <div className="colorsDiv">
          <p
            style={{
              transform: `translateY(${offsetY * 0.2}px)`,
              transform: `scale(${offsetY * 0.007})`,
              opacity: `${offsetY * 18.9}`,
            }}
          >
            A CUSTOM APPAREL COMPANY
          </p>
        </div>
        {/* <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}
      </section>

      <section className="IGblock" aria-label="Instagram photo grid">
        <IGtext className="IGfeed" />
        {isLoading && <Loading element={"element"} />}
        {!isLoading && <div className="IGphotogrid">{IGAPI}</div>}
      </section>

      <section className="info" aria-label="information and socials">
        <div className="infoLeft">
          <h2>Connect with FUGHESI ink</h2>
          <p>
            Click on the social icons to follow our journey and to see updated
            photos/videos, inquire about custom orders, or just say "Hi"
          </p>
        </div>
        <div className="infoRight">
          {indexPageArr.map((i) => (
            <div className="tooltip">
              <span className="tooltipText">{i.text}</span>
              <a
                target="_blank"
                href={i.link}
                data-scheme="fb://profile/fughesiink"
                rel="noreferrer noopener"
              >
                {i.icon}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
