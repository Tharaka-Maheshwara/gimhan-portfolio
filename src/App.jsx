import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectCategoryPage from "./pages/ProjectCategoryPage.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import "./App.css";

function HomePage() {
  return (
    <main>
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="project-category-page">
      <div className="section-container">
        <p className="section-eyebrow">404 / PAGE NOT FOUND</p>
        <h1>This page could not be found.</h1>

        <a className="project-back-link" href="/">
          ← Back to home
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:slug"
          element={<ProjectCategoryPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}