export default function ProjectCard({ project, cover }) {
  return (
    <article className="project-card">
      <div className="project-art">
        {cover && (
          <img
            className="project-cover-image"
            src={cover}
            alt={`${project.title} category cover`}
            loading="lazy"
          />
        )}

        <span className="project-number">{project.number}</span>
      </div>

      <div className="project-card-content">
        <p className="project-category">
          PROJECT CATEGORY / {project.number}
        </p>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  );
}