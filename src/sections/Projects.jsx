import { projects } from "../data/portfolioData.js";
import ProjectCard from "../components/projects/ProjectCard.jsx";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <p className="section-eyebrow">SELECTED WORK / PROJECT AREAS</p>
        <h2>Design work by discipline</h2>
        <p className="section-intro">
          Project images and details will be added using Gimhan’s own work.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}