import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const project = (picture, title, githubLink) => (
    <Link className="project">
      <div className="projectPicture">{picture}</div>
      <div className="projectTextDiv">
        <h4 className="projectText">{title}</h4>
        <h5 className="projectGithubLink">{githubLink}</h5>
      </div>
    </Link>
  );
  return (
    <div id="projectsContent">
      Under Construction
      {/* <h1 id="projectsHeader">Projects</h1>
      <div id="projectsWrapper">
        {project(<></>, "Filler", "e")}
        {project(<></>, "Dodgeball", "e")}
        {project(<></>, "Filler", "e")}
        {project(<></>, "Filler", "e")}
        {project(<></>, "Filler", "e")}
        {project(<></>, "Filler", "e")}
        {project(<></>, "Filler", "e")}
        {project(<></>, "Filler", "e")}
      </div> */}
    </div>
  );
}
