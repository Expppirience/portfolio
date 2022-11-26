import React from "react";
import { Skill } from "../Skill/Skill";
import './Skills.css'

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__container">
        <div className="skills__content">
          <h1 className="skills__title">My skills</h1>
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
