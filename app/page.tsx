import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
