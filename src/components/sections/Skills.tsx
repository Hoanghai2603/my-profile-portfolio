"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { skillGroups } from "@/data/profile";

export function Skills() {
    const t = useTranslations("skills");

    return (
        <section id="skills" className="section-spacing">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, groupIndex) => (
                        <AnimateOnScroll
                            key={group.categoryKey}
                            delay={groupIndex * 0.1}
                            variant="fadeUp"
                        >
                            <div className="p-6 border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300 group">
                                <h3
                                    className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-5"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {t(group.categoryKey.split(".").pop() as string)}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1.5 text-sm font-medium text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-default"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
