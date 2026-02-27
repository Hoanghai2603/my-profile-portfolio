"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { educations } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export function Education() {
    const t = useTranslations("education");

    return (
        <section id="education" className="section-spacing bg-[var(--surface)]">
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
                    {educations.map((edu, i) => (
                        <AnimateOnScroll key={i} delay={i * 0.1} variant="fadeUp">
                            <div className="p-6 border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)]/30 transition-colors duration-200 group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200 shrink-0">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-bold mb-1"
                                            style={{ fontFamily: "var(--font-heading)" }}
                                        >
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm text-[var(--text-muted)] font-medium mb-2">
                                            {edu.school}
                                        </p>
                                        <span className="inline-block px-2 py-1 text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 uppercase tracking-wider">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
