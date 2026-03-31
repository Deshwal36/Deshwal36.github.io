"use client";

import { useEffect, useRef } from "react";
import { experience } from "../data/content";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-surface">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2">&lt; Experience /&gt;</p>
        <h2 className="text-3xl font-bold text-text mb-4">Work History</h2>
        <p className="text-muted mb-12 max-w-lg">
          A journey across fintech, telecom, and retail supply chain domains.
        </p>

        <div className="border-l-2 border-border pl-8 space-y-12">
          {experience.map((entry, index) => (
            <div
              key={`${entry.company}-${entry.period}`}
              className={`relative animate-on-scroll stagger-${index + 1}`}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[2.6rem] top-1 w-3 h-3 rounded-full bg-accent shadow-md shadow-accent/30" />

              <div className="flex flex-wrap items-center gap-3 mb-1">
                <p className="font-mono text-accent text-sm">{entry.role}</p>
                {index === 0 && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-text mb-1">
                {entry.company}
              </h3>
              <p className="text-muted text-sm mb-4">
                {entry.period} &middot; {entry.location}
              </p>

              <p className="text-muted mb-4">{entry.description}</p>

              <ul className="space-y-2 mb-5">
                {entry.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-text/80 text-sm leading-relaxed"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      &#9656;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {entry.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-surface-2 border border-border text-accent text-xs font-mono px-2.5 py-1 rounded-md hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
