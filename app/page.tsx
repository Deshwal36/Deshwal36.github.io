import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
    </main>
  );
}
