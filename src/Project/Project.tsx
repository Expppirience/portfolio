import React from "react";

import './Project.css'

export const Project = () => {
  return (
    <article className="projects__item item-projects">
      <div className="item-projects__content">
        <div className="item-projects__media">
          {/* <img src="#" alt="#" className="item-projects__img" /> */}
          <div className="item-projects__img-placeholder"></div>
          <button className="item-projects__btn">Show more</button>
        </div>
        <div className="item-projects__body">
          <h3 className="item-projects__title">Project title</h3>
          <p className="item-projects__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius
            officiis quidem possimus mollitia nulla in architecto minus expedita
            maxime!
          </p>
        </div>
      </div>
    </article>
  );
};
