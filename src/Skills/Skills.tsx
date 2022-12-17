import "./Skills.scss";

import React from "react";
import { Skill } from "../Skill/Skill";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <div className="skills__content">
          <h2 className="skills__title">My skills</h2>
          <div className="skills__items">
            <Skill />
            <Skill />
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};
