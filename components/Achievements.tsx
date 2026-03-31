"use client";

import { useEffect, useRef } from "react";
import { achievements } from "../data/content";

const achievementIcons: Record<string, string> = {
  "TCS Hackathon": "</> ",
  "Badminton State Winner": "🏸",
};

export default function Achievements() {
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
    <section id="achievements" className="py-24 bg-surface">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2">
          &lt; Achievements /&gt;
        </p>
        <h2 className="text-3xl font-bold text-text mb-12">Achievements</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className={`bg-surface-2 border border-border rounded-xl p-8 text-center hover:border-accent transition-all card-glow w-full animate-on-scroll stagger-${index + 1}`}
            >
              <div
                className="text-4xl mb-4 inline-block"
                aria-hidden="true"
              >
                {achievementIcons[item.title] || "★"}
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm font-mono">
                {item.year} &middot; {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
