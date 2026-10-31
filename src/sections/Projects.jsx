import { projects } from "../data/portfolioData.js";
import ProjectCard from "../components/projects/ProjectCard.jsx";

import sheetMetalCover from "../assets/projects-cover-images/category-sheet-metal.png";
import industrialDesignCover from "../assets/projects-cover-images/category-industrial-design.png";
import reverseEngineeringCover from "../assets/projects-cover-images/category-reverse-engineering.png";
import technicalDrawingsCover from "../assets/projects-cover-images/category-technical-drawings.png";

const coverImages = [
  sheetMetalCover,
  industrialDesignCover,
  reverseEngineeringCover,
  technicalDrawingsCover,
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <p className="section-eyebrow">SELECTED WORK / PROJECT AREAS</p>
        <h2>Design work by discipline</h2>
        <p className="section-intro">
          Explore mechanical design work across four specialist disciplines.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              cover={coverImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}