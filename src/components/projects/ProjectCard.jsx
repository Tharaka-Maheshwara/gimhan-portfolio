import { Link } from "react-router";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="project-card__arrow"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const projectUrl = `/projects/${project.slug}`;

  return (
    <article className="project-card">
      <div className="project-art">
        <img
          className="project-cover-image"
          src={project.cover}
          alt=""
        />

        <span className="project-number">{project.number}</span>

        <Link
          className="project-card__icon-link"
          to={projectUrl}
          aria-label={`View ${project.title} projects`}
        >
          <ArrowIcon />
        </Link>
      </div>

      <div className="project-card-content">
        <p className="project-category">
          PROJECT CATEGORY / {project.number}
        </p>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <Link className="project-card__action" to={projectUrl}>
          View projects
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}