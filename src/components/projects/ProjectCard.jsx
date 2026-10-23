export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-art">
        <span className="project-number">{project.number}</span>
        <div className="project-art-mark" aria-hidden="true">
          CAD
        </div>
        <span className="project-art-label">PROJECT IMAGE TO BE ADDED</span>
      </div>

      <div className="project-card-content">
        <p className="project-category">PROJECT CATEGORY / {project.number}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}