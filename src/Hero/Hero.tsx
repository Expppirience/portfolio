import "./Hero.scss";

import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__info info-hero">
            <h1 className="info-hero__title title--primary">
              Hey!
              <br />
              My name is Aleksey Tsivina.
              <br />
              I'am front-end developer
            </h1>
          </div>
          <div className="hero__media media-hero">
            {/* <img src="#" alt="" className="media-hero__img" /> */}
            <div className="media-hero__img-placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
