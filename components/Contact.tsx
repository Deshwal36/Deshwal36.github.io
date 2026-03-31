"use client";

import { useEffect, useRef } from "react";
import { profile } from "../data/content";

interface ContactCard {
  icon: string;
  label: string;
  display: string;
  href: string;
  external: boolean;
}

const contactCards: ContactCard[] = [
  {
    icon: "📧",
    label: "Email",
    display: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    display: "shivam-deshwal",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    display: "Deshwal36",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
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
    <section id="contact" className="py-24 bg-background">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="animate-on-scroll">
          <p className="font-mono text-accent text-sm mb-2">
            {"< Contact />"}
          </p>
          <h2 className="text-3xl font-bold text-text mb-3">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted max-w-md mb-10">
            Got an interesting problem to solve, a system to scale, or just want
            to talk distributed systems? I&apos;m all ears.
          </p>
        </div>

        {/* Contact links — inline minimal */}
        <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll stagger-1">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group flex items-center gap-3 bg-surface border border-border rounded-lg px-5 py-4 hover:border-accent transition-all card-glow flex-1"
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="text-xl">{card.icon}</span>
              <div className="min-w-0">
                <p className="text-muted text-xs font-mono">{card.label}</p>
                <p className="text-accent text-sm font-medium truncate group-hover:underline">
                  {card.display}
                </p>
              </div>
              <span className="ml-auto text-muted/30 group-hover:text-accent/50 transition-colors text-sm">
                &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="section-divider my-16" />

        <footer className="text-center space-y-2 animate-on-scroll stagger-2">
          <p className="text-muted text-sm">
            Crafted with curiosity, caffeine, and a passion for clean code.
          </p>
          <p className="text-muted/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  );
}
