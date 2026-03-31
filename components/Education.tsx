"use client";

import { useEffect, useRef } from "react";
import { education, achievements } from "../data/content";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-on-scroll stagger-1">
            <p className="font-mono text-accent text-sm mb-2">
              &lt; Education /&gt;
            </p>
            <h2 className="text-2xl font-bold text-text mb-6">Education</h2>

            {education.map((entry) => (
              <div
                key={entry.institution}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all card-glow"
              >
                <p className="text-accent font-mono text-sm font-semibold">
                  {entry.degree}
                </p>
                <h3 className="text-lg font-semibold text-text mt-1">
                  {entry.field}
                </h3>
                <p className="text-muted text-sm mt-1">
                  {entry.institution} &middot; {entry.period}
                </p>
                <p className="text-muted text-xs font-mono mt-2">
                  {entry.score}
                </p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="animate-on-scroll stagger-2">
            <p className="font-mono text-accent text-sm mb-2">
              &lt; Achievements /&gt;
            </p>
            <h2 className="text-2xl font-bold text-text mb-6">Achievements</h2>

            <div className="space-y-4">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all card-glow flex items-center gap-4"
                >
                  <span className="text-2xl flex-shrink-0">
                    {item.title.includes("Hackathon") ? "🏆" : "🏸"}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm font-mono">
                      {item.year} &middot; {item.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
