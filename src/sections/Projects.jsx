import { useState } from "react";
import { projects } from "../data/portfolioData.js";
import ProjectCard from "../components/projects/ProjectCard.jsx";

const filters = [
  { value: "all", label: "ALL WORK" },
  { value: "1", label: "3D / SHEET METAL" },
  { value: "2", label: "PRODUCT / INDUSTRIAL" },
  { value: "3", label: "REVERSE ENGINEERING" },
  { value: "4", label: "2D DRAWINGS" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.number === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <p className="section-eyebrow">SELECTED WORK / PROJECT AREAS</p>

        <h2>Design work by discipline</h2>

        <p className="section-intro">
          Explore mechanical design work across four specialist disciplines.
        </p>

        <div
          className="project-filters"
          role="group"
          aria-label="Filter project categories"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                className={`project-filter-button${
                  isActive ? " is-active" : ""
                }`}
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
              >
                <span>{filter.label}</span>

                {filter.value === "all" && (
                  <span className="project-filter-count">
                    / {String(projects.length).padStart(2, "0")}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}