import React, { useEffect, useState } from "react";
import IndexPageArr from "./indexPageJSON";
import IGtext from "./../../resources/icons/IGtext";
import IGsmall from "../../resources/icons/IGsmall";
import Loading from "../loadingPage/Loading";
import "./indexPage.css";

export default function IndexPage({ blur }) {
  const [IGAPI, setIGAPI] = useState([]); //will rerender p API call to IG fullfills
  const [offsetY, setOffsetY] = useState(0); //tracks scrolling
  const [isLoading, setIsLoading] = useState(false); //conditionally render loading page
  const IG_key = process.env.REACT_APP_INSTAGRAM_API_KEY; // IG API token
  const url = `https://graph.instagram.com/5256198047808423/media?fields=id,caption,permalink,media_url&access_token=${IG_key}`; // ----- URL for fughesi_ink IG feed with access token ------

  // start position to top on page load -------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get page location in Y axis && parallax effect ----- HandleScroll
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // API function to get photos from fughesi_ink IG page (up to 12) ------- IG photos
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
        console.log(data);
        setIGAPI(x);
      })
      .catch((e) => console.error("failed to fetch"))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  // calling the getAPI function with useEffect ---------
  useEffect(() => {
    getAPI();
  }, []);

  return (
    <main className={`indexMain ${blur ? "blur" : ""}`}>
      <section className="indexHeroSection" aria-label="hero section">
        <div className="divDrips">
          {/* {new Array(9).fill(null).map((i,index) => {
            return (
              <div
                style={{
                  transform: `translateY(${offsetY / index}px)`,
                }}
              ></div>
            );
          })} */}
        </div>
        <div className="dissapearingInk">
          <p className="welcomeTo">WELCOME TO</p>
          <h1 style={{
            transform: `translateY(${offsetY * 0.05}px)`,
          }}>FUGHESI INK</h1>
        </div>
        <div
          style={{
            transform: `translateY(${offsetY * 0.175}px)`,
          }}
        >
          <p>A CUSTOM APPAREL COMPANY</p>
        </div>
      </section>

      <section  aria-label="information">
        
        <div className="information"> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus eum ducimus veniam velit illo nam eveniet facere, tempore aperiam vero sunt totam iure! Temporibus ea molestias obcaecati id iste distinctio natus autem, suscipit facere debitis, quasi doloribus quaerat similique magni quod consectetur dolorum alias consequuntur vero delectus ducimus commodi cumque sint eaque? Veniam tempore corporis odio, dignissimos, officiis soluta non quidem voluptates facere dolorem voluptas doloremque distinctio omnis architecto deserunt iusto quam maiores sed ipsam debitis similique dolor vero. Repudiandae a deleniti nesciunt, magnam hic earum dolor in molestiae! Minus ipsum numquam veritatis! Iure enim perspiciatis fugiat incidunt accusamus exercitationem nobis quidem odit eum atque temporibus repellat facilis quasi natus, numquam magnam deleniti aperiam totam quis. Odit aperiam dignissimos, illum, molestiae tempora sunt vero quidem repellat esse ullam possimus iusto laboriosam fugit! Perspiciatis id suscipit facilis fugiat incidunt totam modi adipisci odio facere. Quasi, natus ullam iusto distinctio velit mollitia magni numquam modi nemo, eius explicabo. Repudiandae a cumque est quibusdam, repellendus neque maiores eos iure, quia aspernatur, quo vitae asperiores doloremque dolorum illum ipsam architecto. Pariatur ut nulla maiores aliquid, molestiae perspiciatis, asperiores accusamus reiciendis quos, necessitatibus perferendis! Quidem iure incidunt vero repudiandae distinctio facilis quos! Repellat, quo ex.
          </div>
        {/* THINGS! */}
      </section>

      <section className="socialSection" aria-label="social links and icons">
        <div className="infoLeft">
          <h2>Connect with FUGHESI ink</h2>
          <p>
            Click on the social icons to follow our journey and to see updated
            photos/videos, inquire about custom orders, or just say "Hi"
          </p>
        </div>
        <div className="infoRight">
          <IndexPageArr />
        </div>
      </section>

      <section className="IGblock" aria-label="Instagram photo grid">
        <IGtext className="IGfeed" />
        {isLoading && <Loading element={"element"} />}
        {!isLoading && <div className="IGphotogrid">{IGAPI}</div>}
      </section>
    </main>
  );
}
