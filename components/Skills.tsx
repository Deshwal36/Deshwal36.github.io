"use client";

import { useEffect, useRef } from "react";
import { skills } from "../data/content";

const categoryIcons: Record<string, string> = {
  Languages: "{ }",
  Frameworks: ">>",
  "Messaging & Streaming": "~>",
  "Cloud & DevOps": "@@",
  Architecture: "##",
  Databases: "[]",
  "Tools & Monitoring": "./",
};

export default function Skills() {
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
    <section id="skills" className="py-24 bg-background">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2">&lt; Skills /&gt;</p>
        <h2 className="text-3xl font-bold text-text mb-4">Tech Stack</h2>
        <p className="text-muted mb-12 max-w-lg">
          Technologies and tools I work with to build reliable, scalable
          systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className={`bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all card-glow animate-on-scroll stagger-${index + 1}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent font-mono text-lg">
                  {categoryIcons[group.category] || ">>"}
                </span>
                <p className="text-accent font-mono text-sm font-semibold">
                  {group.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface-2 text-text text-sm px-3 py-1.5 rounded-md border border-transparent hover:border-accent/30 transition-colors"
                  >
                    {item}
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
