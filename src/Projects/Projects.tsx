import "./Projects.scss";

import { Project } from "../Project/Project";
import React from "react";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__content">
          <h2 className="projects__title">My projects</h2>
          <div className="projects__items">
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};
