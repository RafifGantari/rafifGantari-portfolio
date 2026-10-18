import { ArrowDownRight, ExternalLink, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import TypewriterText from "@/components/TypewriterText";
import CopyButton from "@/components/CopyButton";
import FadeIn from "@/components/FadeIn";
import GitHubActivity from "@/components/GitHubActivity";
import { resumeData } from "@/data/resume";

export default function Home() {
  const currentYear = 2026;

  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main>
        {/* Intro Section */}
        <section
          id="intro"
          className="min-h-screen flex flex-col justify-center px-6 lg:px-32 xl:px-40 max-w-content mx-auto"
        >
          <div className="border border-line rounded-b-md rounded-tr-md p-8 lg:p-14 bg-[var(--color-paper)]">
            <p aria-hidden="true" className="font-mono text-xs text-ink-mute mb-6">
              <span className="text-ink">const</span> role{" "}
              <span className="text-ink">=</span>{" "}
              <TypewriterText words={resumeData.roles} />
              <span className="caret">▍</span>
            </p>
            <p className="sr-only">
              const role = &quot;{resumeData.roles[0]}&quot;
            </p>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-balance leading-[1.05]">
              {resumeData.name}
            </h1>
            <p className="mt-8 max-w-2xl text-ink-soft text-base lg:text-lg leading-relaxed">
              {resumeData.summary}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 font-mono text-sm border border-ink px-5 py-3 rounded-md hover:bg-ink hover:text-[var(--color-paper)] transition-colors cursor-pointer"
              >
                View experience{" "}
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <span className="font-mono text-xs text-ink-mute">
                {resumeData.location}
              </span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="px-6 lg:px-32 xl:px-40 max-w-content mx-auto py-24 border-t border-line"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-ink-mute">01</span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
              Experience
            </h2>
          </div>
          <div className="space-y-14">
            {resumeData.experiences.map((exp, idx) => (
              <FadeIn key={exp.id} delay={idx * 0.05}>
                <div className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-10">
                  <div>
                    <p className="font-mono text-xs text-ink-mute">{exp.period}</p>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink-mute mt-1">
                      {exp.category}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">{exp.role}</h3>
                    <p className="text-ink-soft text-sm mt-1">{exp.organization}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink-soft leading-relaxed pl-4 relative"
                        >
                          <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-ink-mute" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] border border-line rounded px-2 py-1 text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="px-6 lg:px-32 xl:px-40 max-w-content mx-auto py-24 border-t border-line"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-ink-mute">02</span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
              Projects
            </h2>
          </div>
          <div className="grid gap-6">
            {resumeData.projects.map((proj) => (
              <div
                key={proj.id}
                className="group relative border border-line rounded-md p-8 hover:border-ink transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium">{proj.title}</h3>
                    <p className="text-ink-soft text-sm mt-1">
                      {proj.role}
                      {proj.period ? ` · ${proj.period}` : ""}
                    </p>
                  </div>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-mute group-hover:text-ink transition-all focus:outline-none"
                      aria-label={`View ${proj.title} project (opens in a new tab)`}
                      title={`View ${proj.title} project`}
                    >
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      <ExternalLink
                        size={18}
                        className="transition-transform group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
                <ul className="mt-5 space-y-2">
                  {proj.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm text-ink-soft leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-ink-mute" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] border border-line rounded px-2 py-1 text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards Section */}
        <section
          id="education"
          className="px-6 lg:px-32 xl:px-40 max-w-content mx-auto py-24 border-t border-line"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-ink-mute">03</span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
              Education &amp; Awards
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="space-y-8">
              {resumeData.education.map((edu, idx) => (
                <div key={idx}>
                  <p className="font-mono text-xs text-ink-mute">{edu.period}</p>
                  <h3 className="font-display text-lg font-medium mt-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-ink-soft mt-1">{edu.degree}</p>
                  <ul className="mt-3 space-y-1">
                    {edu.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-ink-mute">
                        - {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-mute mb-4">
                Awards &amp; Honors
              </p>
              <div className="space-y-4">
                {resumeData.awards.map((award, idx) => (
                  <div key={idx} className="border-l-2 border-line pl-4">
                    <p className="text-sm font-medium">{award.title}</p>
                    <p className="text-xs text-ink-mute mt-0.5">{award.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="px-6 lg:px-32 xl:px-40 max-w-content mx-auto py-24 border-t border-line"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-xs text-ink-mute">04</span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
              Skills
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {resumeData.skills.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink-mute mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm border border-line rounded px-3 py-1.5 text-ink-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Activity */}
          <div className="mt-14">
            <GitHubActivity username="RafifGantari" />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-6 lg:px-32 xl:px-40 max-w-content mx-auto py-24 border-t border-line"
        >
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-xs text-ink-mute">05</span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
              Contact
            </h2>
          </div>
          <h3 className="font-display text-3xl lg:text-5xl font-medium max-w-2xl text-balance leading-tight">
            Let&#x27;s build intelligent and reliable systems together.
          </h3>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
            {/* Email */}
            <div className="group flex items-center">
              <a
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-2 hover:text-ink-mute transition-colors"
              >
                <Mail size={16} aria-hidden="true" /> {resumeData.email}
              </a>
              <CopyButton text={resumeData.email} label="Copy email address" />
            </div>

            {/* Phone / WhatsApp */}
            <div className="group flex items-center">
              <a
                href={`https://wa.me/${resumeData.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ink-mute transition-colors"
              >
                <Phone size={16} aria-hidden="true" /> {resumeData.phone}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <CopyButton text={resumeData.phone} label="Copy phone number" />
            </div>

            {/* LinkedIn */}
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-ink-mute transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>{" "}
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            {/* GitHub */}
            <a
              href={resumeData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-ink-mute transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>{" "}
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <p className="mt-16 font-mono text-xs text-ink-mute">
            © {currentYear} {resumeData.name}. Built with Next.js.
          </p>
        </section>
      </main>
    </>
  );
}
