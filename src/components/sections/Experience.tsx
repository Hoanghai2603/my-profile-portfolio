"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { experiences } from "@/data/profile";
import { Briefcase } from "lucide-react";

export function Experience() {
    const t = useTranslations("experience");

    return (
        <section id="experience" className="section-spacing">
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

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-[var(--border)]" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => (
                            <AnimateOnScroll key={i} delay={i * 0.15} variant="slideRight">
                                <div className="relative pl-8 md:pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 bg-[var(--accent)] border-[3px] border-[var(--bg)]" />

                                    {/* Period badge */}
                                    <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 mb-3">
                                        {exp.period}
                                    </div>

                                    {/* Content card */}
                                    <div className="p-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors duration-200">
                                        <div className="flex items-start gap-3 mb-3">
                                            <Briefcase className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                                            <div>
                                                <h3
                                                    className="text-lg font-bold"
                                                    style={{ fontFamily: "var(--font-heading)" }}
                                                >
                                                    {exp.role}
                                                </h3>
                                                <p className="text-sm text-[var(--text-muted)] font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-4 ml-8">
                                            {exp.descriptionKeys.map((descKey, j) => {
                                                const parts = descKey.split(".");
                                                const company = parts[1];
                                                const desc = parts[2];
                                                return (
                                                    <li
                                                        key={j}
                                                        className="text-sm text-[var(--text-muted)] relative before:content-['—'] before:absolute before:-left-5 before:text-[var(--accent)]"
                                                    >
                                                        {t(`${company}.${desc}`)}
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/8 border border-[var(--accent)]/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
