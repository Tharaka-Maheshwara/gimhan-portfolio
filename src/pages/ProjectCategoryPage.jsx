import { Link, useParams } from "react-router";
import { projects } from "../data/portfolioData.js";

export default function ProjectCategoryPage() {
  const { id } = useParams();
  const category = projects.find((project) => project.id === id);

  if (!category) {
    return (
      <main className="project-category-page">
        <div className="section-container">
          <p className="section-eyebrow">PROJECT AREA NOT FOUND</p>
          <h1>Sorry, this category could not be found.</h1>

          <Link className="project-back-link" to="/#projects">
            ← Back to all project areas
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-category-page">
      <div className="section-container">
        <Link className="project-back-link" to="/#projects">
          ← All project areas
        </Link>

        <header className="project-category-header">
          <p className="section-eyebrow">
            PROJECT CATEGORY / {category.number}
          </p>

          <h1>{category.title}</h1>
          <p className="project-category-intro">{category.description}</p>
        </header>

        <div className="project-category-cover">
          <img src={category.cover} alt="" />
        </div>

        <div className="project-list-heading">
          <div>
            <p className="section-eyebrow">SELECTED WORK</p>
            <h2>Projects in this category</h2>
          </div>

          <span>
            {String(category.items.length).padStart(2, "0")} PROJECT
            {category.items.length === 1 ? "" : "S"}
          </span>
        </div>

        <div className="project-detail-grid">
          {category.items.map((item, index) => (
            <article className="project-detail-card" key={item.title}>
              <p className="project-detail-number">
                PROJECT {String(index + 1).padStart(2, "0")} /{" "}
                {String(category.items.length).padStart(2, "0")}
              </p>

              {item.image && (
                <img
                  className="project-detail-image"
                  src={item.image}
                  alt={item.title}
                />
              )}

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}