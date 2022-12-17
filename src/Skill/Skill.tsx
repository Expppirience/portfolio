import "./Skill.scss";

import React from "react";

export const Skill = () => {
  return (
    <article className="skill__item item-skill">
      <div className="item-skill__img">
        {/* <img src="#" alt=""> */}
        <div className="item-skill__img-placeholder"></div>
      </div>
      <h2 className="item-skill__title title--primary">React</h2>
      <div className="item-skill__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod
        incidunt quia sapiente voluptatem accusantium amet aut? Autem placeat
        dolorum eos optio omnis excepturi rem officia repellat, reiciendis
        architecto assumenda.
      </div>
    </article>
  );
};
