import "./App.css";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <div id="about">
          <Hero />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}