"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex flex-col gap-3 fixed left-10 top-1/2 -translate-y-1/2 z-40 transition-opacity duration-500 focus-within:opacity-100 focus-within:pointer-events-auto opacity-100"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 py-1"
            aria-label={item.label}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-px transition-all duration-500 ${
                isActive
                  ? "w-8 bg-ink"
                  : "w-4 bg-ink-mute group-hover:w-6 group-hover:bg-ink-soft"
              }`}
            />
            <span
              className={`font-mono text-[11px] tracking-wide uppercase transition-colors duration-500 ${
                isActive
                  ? "text-ink"
                  : "text-ink-mute group-hover:text-ink-soft"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
