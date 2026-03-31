"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/content";

const terminalLines = [
  { prompt: "$ whoami", output: profile.name },
  { prompt: "$ cat role.txt", output: profile.role },
  { prompt: "$ echo $LOCATION", output: profile.location },
  {
    prompt: "$ uptime --experience",
    output: "7+ years | 4 companies | 3 domains",
  },
];

const impactStats = [
  { value: "7+", label: "Years Experience" },
  { value: "150k+", label: "Txns / Day" },
  { value: "99.9%", label: "Reconciliation" },
  { value: "3", label: "Domains" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullTagline = profile.tagline;

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    if (typedText.length < fullTagline.length) {
      const timer = setTimeout(
        () => setTypedText(fullTagline.slice(0, typedText.length + 1)),
        40
      );
      return () => clearTimeout(timer);
    }
  }, [typedText, fullTagline]);

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
          {/* Left: text content */}
          <div className="flex-1 flex flex-col gap-6 animate-fade-in text-center lg:text-left">
            {/* Avatar + Name row */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-5">
              <img
                src={profile.avatar}
                alt={`${profile.name} profile photo`}
                width={72}
                height={72}
                className="w-[72px] h-[72px] rounded-full border-2 border-accent object-cover shadow-lg shadow-accent/10 flex-shrink-0"
              />
              <div>
                <span className="font-mono text-accent text-sm tracking-wide block mb-1">
                  {"< Senior Software Engineer />"}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-text leading-tight">
                  {profile.name}
                </h1>
              </div>
            </div>

            {/* Typing tagline */}
            <p className="text-xl text-muted h-8">
              {typedText}
              <span className="animate-blink text-accent">|</span>
            </p>

            <p className="text-muted/80 max-w-lg leading-relaxed text-base">
              {profile.bio}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={handleScrollToExperience}
                className="group px-6 py-3 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                View Experience
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
              <a
                href="/Shivam_Deshwal_Resume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-background transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Resume &darr;
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-muted text-xs font-mono">
                {profile.location} &middot; Available for collaboration
              </span>
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="flex-shrink-0 w-full lg:w-auto animate-slide-up">
            <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/30 max-w-sm mx-auto lg:mx-0">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-muted text-xs font-mono">
                  shivam@portfolio ~ zsh
                </span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm space-y-3">
                {terminalLines.map((line, i) => (
                  <div
                    key={line.prompt}
                    className={`transition-all duration-500 ${
                      i < visibleLines
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    <p className="text-muted">{line.prompt}</p>
                    <p className="text-accent">{line.output}</p>
                  </div>
                ))}
                {visibleLines >= terminalLines.length && (
                  <p className="text-muted animate-blink">$ _</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Impact stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-lg bg-surface/50 border border-border hover:border-accent transition-colors group"
            >
              <p className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </p>
              <p className="text-muted text-xs font-mono mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted/50 text-xs font-mono animate-bounce select-none">
          <span>scroll</span>
          <span className="text-base">&darr;</span>
        </div>
      </div>
    </section>
  );
}
