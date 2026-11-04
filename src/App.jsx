import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Education from "./sections/Education.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectCategoryPage from "./pages/ProjectCategoryPage.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import "./App.css";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1));

        if (target) {
          const header = document.querySelector(".site-header");
          const headerHeight = header?.getBoundingClientRect().height ?? 0;
          const targetTop =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({ top: targetTop, behavior: "auto" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
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
      <ScrollManager />

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