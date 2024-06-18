import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="Levels" />
        <ProjectBox projectPhoto={FilmImage} projectName="HP-Restaurant" />
        <ProjectBox projectPhoto={ColourImage} projectName="Online Transaction Fraud Detection" />
        <ProjectBox projectPhoto={BackpackImage} projectName="An Enhanced Product Recommendation System" />
      </div>
    </div>
  );
};

export default Projects;
