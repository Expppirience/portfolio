import React from "react";
import { Project } from "../Project/Project";

import "./Projects.css";

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
