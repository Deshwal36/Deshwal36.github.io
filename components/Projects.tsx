"use client";

import { useEffect, useRef } from "react";
import { projects } from "../data/content";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-surface">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2">
          &lt; Projects /&gt;
        </p>
        <h2 className="text-3xl font-bold text-text mb-4">Projects</h2>
        <p className="text-muted mb-10 max-w-lg">
          Academic projects showcasing algorithmic thinking and system design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-surface-2 border border-border rounded-xl p-5 hover:border-accent transition-all card-glow animate-on-scroll stagger-${index + 1}`}
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-accent font-mono text-xs">{project.date}</p>
                <span className="text-accent/30 font-mono text-sm group-hover:text-accent/60 transition-colors">
                  &#123;&#125;
                </span>
              </div>
              <h3 className="text-base font-semibold text-text mb-2">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
