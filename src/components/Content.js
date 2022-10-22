import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import PhotoCard from "../images/sceenshots/photoCard.jpg";

const Content = () => {
  return (
    <div className="digital--business-card">
      <div className="digital--card">
        <div className="digital--container">
          <img src={PhotoCard} alt="photoCard.jpg" />
          <h1 className="header--name">John Cañero</h1>
          <h4 className="subheader--role">
            Frontend Developer | Architecture Designer
          </h4>
          <a 
            href="https://johncanero.github.io/JamWebsite/" 
            rel="noopener noreferrer"
            target="_blank">
          <p className="subheader-website">johncanero.website</p>
          </a>
        </div>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default Content;
