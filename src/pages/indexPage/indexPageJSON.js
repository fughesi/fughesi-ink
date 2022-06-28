import React from "react";
import FB from "./../../resources/icons/FB";
import IG from "./../../resources/icons/IG";
import WA from "./../../resources/icons/WA";
import Etsy from "./../../resources/icons/Etsy";

export default function IndexPageJSON() {
  // --- all the social media icons and links in an array of objects
  const indexPageArr = [
    {
      text: "Follow on Facebook",
      link: "http://facebook.com/fughesiink",
      icon: <FB className="socialsSVG" />,
    },
    {
      text: "Follow on Instagram",
      link: "https://www.instagram.com/fughesi_ink/",
      icon: <IG className="socialsSVG" />,
    },
    {
      text: "Etsy Store",
      link: "http://facebook.com/fughesiink",
      icon: <Etsy className="socialsSVG" />,
    },
    {
      text: "Message on WhatsApp",
      link: "https://wa.me/message/PKTZG4VTREDRN1",
      icon: <WA className="socialsSVG" />,
    },
  ];

  const socials = indexPageArr.map((i, index) => (
    <div className="tooltip" key={index}>
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
  )); //----------maps over the above array and makes an anchor and SVG

  return <>{socials}</>;
}
