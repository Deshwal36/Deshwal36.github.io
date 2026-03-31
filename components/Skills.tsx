"use client";

import { useEffect, useRef } from "react";
import { skills, projects, education, achievements } from "../data/content";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const items = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background">
      <div ref={sectionRef} className="max-w-5xl mx-auto px-6">
        {/* ── Tech Stack as code block ── */}
        <div className="animate-on-scroll">
          <p className="font-mono text-accent text-sm mb-2">
            &lt; Skills /&gt;
          </p>
          <h2 className="text-3xl font-bold text-text mb-8">Tech Stack</h2>

          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg shadow-black/20">
            {/* Code editor title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-muted text-xs font-mono">
                stack.config
              </span>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm space-y-1.5 overflow-x-auto">
              <p className="text-muted/50">
                <span className="text-accent/40 select-none mr-4">01</span>
                {"// what I build with"}
              </p>
              {skills.map((group, i) => (
                <p key={group.category}>
                  <span className="text-muted/40 select-none mr-4">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="text-accent">{group.category}</span>
                  <span className="text-muted/50">{" : "}</span>
                  <span className="text-text/80">
                    [{" "}
                    {group.items.map((item, j) => (
                      <span key={item}>
                        <span className="text-green-400/90">
                          &quot;{item}&quot;
                        </span>
                        {j < group.items.length - 1 && (
                          <span className="text-muted/50">, </span>
                        )}
                      </span>
                    ))}
                    {" ]"}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Grid: Projects | Education & Achievements ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-14">
          {/* Projects — 3 cols */}
          <div className="md:col-span-3 animate-on-scroll stagger-1">
            <p className="font-mono text-accent text-xs mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-4 h-px bg-accent/40" />
              Projects
            </p>
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group flex gap-4 items-start bg-surface/50 border border-border rounded-lg p-4 hover:border-accent/50 transition-all"
                >
                  <span className="text-accent/30 font-mono text-lg mt-0.5 group-hover:text-accent/60 transition-colors leading-none">
                    &#9656;
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-text truncate">
                        {project.title}
                      </h3>
                      <span className="text-muted/40 text-xs font-mono flex-shrink-0">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements — 2 cols */}
          <div className="md:col-span-2 space-y-8 animate-on-scroll stagger-2">
            {/* Education */}
            <div>
              <p className="font-mono text-accent text-xs mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-4 h-px bg-accent/40" />
                Education
              </p>
              {education.map((entry) => (
                <div
                  key={entry.institution}
                  className="border-l-2 border-accent/30 pl-4"
                >
                  <p className="text-text text-sm font-semibold">
                    {entry.degree}
                  </p>
                  <p className="text-muted text-xs mt-0.5">
                    {entry.field} — {entry.institution}
                  </p>
                  <p className="text-muted/50 text-xs font-mono mt-0.5">
                    {entry.period}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <p className="font-mono text-accent text-xs mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="w-4 h-px bg-accent/40" />
                Achievements
              </p>
              <div className="space-y-3">
                {achievements.map((item) => (
                  <div key={item.title} className="flex items-center gap-3">
                    <span className="text-base flex-shrink-0">
                      {item.title.includes("Hackathon") ? "🏆" : "🏸"}
                    </span>
                    <div>
                      <p className="text-text text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="text-muted/50 text-xs font-mono">
                        {item.year} · {item.org}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
