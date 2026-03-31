"use client";

import { useEffect, useRef } from "react";
import { education } from "../data/content";

export default function Education() {
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
    <section id="education" className="py-24 bg-background">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2">
          &lt; Education /&gt;
        </p>
        <h2 className="text-3xl font-bold text-text mb-12">Education</h2>

        <div className="space-y-8">
          {education.map((entry) => (
            <div
              key={entry.institution}
              className="bg-surface border border-border rounded-xl p-8 hover:border-accent transition-all card-glow animate-on-scroll"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-accent font-mono text-sm font-semibold mb-1">
                    {entry.degree}
                  </p>
                  <h3 className="text-xl font-semibold text-text mb-1">
                    {entry.field}
                  </h3>
                  <p className="text-muted text-sm">
                    {entry.institution} &middot; {entry.period}
                  </p>
                </div>
                <div className="bg-surface-2 border border-border rounded-lg px-4 py-2 text-center">
                  <p className="text-accent font-mono text-lg font-bold">70%</p>
                  <p className="text-muted text-xs font-mono">Score</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
