import React from "react";
import './Skill.css'

export const Skill = () => {
  return (
    <article className="skill__item item-skill">
      <div className="item-skill__img">
        {/* <img src="#" alt=""> */}
        <div className="item-skill__img-placeholder"></div>
      </div>
      <h2 className="item-skill__title">React</h2>
      <div className="item-skill__description">Skill description</div>
    </article>
  );
};
