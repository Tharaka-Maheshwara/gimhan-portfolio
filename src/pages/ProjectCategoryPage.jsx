import { Link, useParams } from "react-router";
import { projects } from "../data/portfolioData.js";

export default function ProjectCategoryPage() {
  const { id } = useParams();
  const category = projects.find((item) => item.id === id);

  if (!category) {
    return (
      <main className="project-category-page">
        <div className="section-container">
          <h1>Category not found</h1>
          <Link className="project-back-link" to="/#projects">
            ← Back to project categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-category-page">
      <div className="section-container">
        <Link className="project-back-link" to="/#projects">
          ← All project categories
        </Link>

        <header className="project-category-header">
          <p className="section-eyebrow">
            MAIN CATEGORY / {category.number}
          </p>
          <h1>{category.title}</h1>
          <p className="project-category-intro">{category.description}</p>
        </header>

        <section className="category-projects">
          {category.projects.length > 0 ? (
            category.projects.map((project) => (
              <article className="project-detail-card" key={project.folder}>
                <p className="project-detail-number">
                  PROJECT {project.subNumber}
                </p>

                <h2>{project.title}</h2>
                <p className="project-detail-description">
                  {project.description}
                </p>

                <div className="project-gallery">
                  {project.images.map((image, index) => (
                    <figure key={image.src}>
                      <img src={image.src} alt={image.alt} />
                      <figcaption>
                        FIGURE {String(index + 1).padStart(2, "0")}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <div className="project-empty-state">
              <h2>No project images found</h2>
              <p>
                Add project folders and images under this category’s asset
                folder.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}