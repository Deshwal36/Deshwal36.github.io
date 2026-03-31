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
        <p className="font-mono text-accent text-sm mb-2">
          {"< Contact />"}
        </p>
        <h2 className="text-3xl font-bold text-text mb-4">Get In Touch</h2>
        <p className="text-muted mb-12 max-w-lg">
          I&apos;m always open to interesting conversations, collaborations, or
          just a chat about backend engineering and distributed systems.
        </p>

        {/* Contact cards */}
        <div className="flex flex-col md:flex-row gap-4">
          {contactCards.map((card, index) => (
            <a
              key={card.label}
              href={card.href}
              className={`bg-surface border border-border rounded-xl p-6 text-center hover:border-accent transition-all card-glow w-full group animate-on-scroll stagger-${index + 1}`}
              {...(card.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {card.icon}
              </div>
              <p className="text-muted text-sm font-mono mb-2">{card.label}</p>
              <p className="text-accent font-medium break-all group-hover:underline">
                {card.display}
              </p>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Footer */}
        <div className="text-center space-y-3">
          <p className="text-muted text-sm font-mono">
            Designed &amp; built with Next.js + Tailwind CSS
          </p>
          <p className="text-muted/50 text-xs">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
