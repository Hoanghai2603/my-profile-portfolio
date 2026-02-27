"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { projects } from "@/data/profile";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const t = useTranslations("projects");

    return (
        <section id="projects" className="section-spacing bg-[var(--surface)]">
            <div className="section-container">
                <AnimateOnScroll>
                    <h2
                        className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t("heading")}
                        <span className="text-[var(--accent)]">.</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[var(--accent)] mb-12" />
                </AnimateOnScroll>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => {
                        const titleParts = project.titleKey.split(".");
                        const projectKey = titleParts[1];

                        return (
                            <AnimateOnScroll key={i} delay={i * 0.15} variant="fadeUp">
                                <div className="group relative border border-[var(--border)] bg-[var(--bg)] overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-300">
                                    {/* Project image area */}
                                    <div className="relative h-48 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent)]/15 flex items-center justify-center overflow-hidden">
                                        <div className="text-6xl font-black text-[var(--accent)] opacity-10 select-none" style={{ fontFamily: "var(--font-heading)" }}>
                                            {String(i + 1).padStart(2, "0")}
                                        </div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-[var(--accent)]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.demoUrl && (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 flex items-center justify-center bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                                                    aria-label={t("viewDemo")}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 flex items-center justify-center bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
                                                    aria-label={t("viewCode")}
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3
                                                className="text-lg font-bold"
                                                style={{ fontFamily: "var(--font-heading)" }}
                                            >
                                                {t(`${projectKey}.title`)}
                                            </h3>
                                            <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                                                {project.role}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                                            {t(`${projectKey}.description`)}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs font-medium text-[var(--text-muted)] border border-[var(--border)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
