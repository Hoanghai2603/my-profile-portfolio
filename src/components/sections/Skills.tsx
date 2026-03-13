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
                    >
                        {t("heading")}
                        <span className="text-[var(--accent)]">.</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[var(--accent)] mb-12" />
                </AnimateOnScroll>

                <div className="flex flex-wrap gap-3 md:gap-4">
                    {skillGroups.flatMap(group => group.skills).map((skill, index) => (
                        <AnimateOnScroll
                            key={`${skill.name}-${index}`}
                            delay={(index % 15) * 0.05}
                            variant="fadeUp"
                        >
                            <span
                                className="inline-block px-5 py-2.5 text-sm md:text-base font-medium text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                            >
                                {skill.name}
                            </span>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
