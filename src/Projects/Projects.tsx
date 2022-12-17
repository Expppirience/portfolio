import "./Projects.scss";

import { Project } from "../Project/Project";
import React from "react";

export interface IProjectStyles {
  backgroundColor: string;
}

export const Projects = () => {
  const projectStyles = {
    backgroundColor: "#525151",
  };
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__content">
          <h2 className="projects__title title--primary title--underline">
            My projects
          </h2>
          <div className="projects__items">
            <Project projectStyles={projectStyles} />
            <Project projectStyles={projectStyles} />
            <Project projectStyles={projectStyles} />
            <Project projectStyles={projectStyles} />
          </div>
        </div>
      </div>
    </div>
  );
};
