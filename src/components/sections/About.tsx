"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { profile } from "@/data/profile";
import { Zap, Layout, Code2, Lightbulb } from "lucide-react";

const highlights = [
    { key: "responsive", icon: Layout },
    { key: "performance", icon: Zap },
    { key: "clean", icon: Code2 },
    { key: "ux", icon: Lightbulb },
];

const stats = [
    { key: "years", value: profile.yearsOfExperience, suffix: "+" },
    { key: "projects", value: 20, suffix: "+" },
    { key: "technologies", value: 15, suffix: "+" },
];

export function About() {
    const t = useTranslations("about");

    return (
        <section id="about" className="section-spacing bg-[var(--surface)]">
            <div className="section-container">
                <AnimateOnScroll>
                    <h2
                        className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t("heading")}
                        <span className="text-[var(--accent)]">.</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[var(--accent)] mb-10" />
                </AnimateOnScroll>

                <div className="grid md:grid-cols-5 gap-12 md:gap-16">
                    {/* Bio */}
                    <div className="md:col-span-3">
                        <AnimateOnScroll delay={0.1}>
                            <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                                {t("bio")}
                            </p>
                        </AnimateOnScroll>

                        {/* Stats */}
                        <AnimateOnScroll delay={0.2}>
                            <div className="grid grid-cols-3 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.key} className="text-center md:text-left">
                                        <div
                                            className="text-3xl md:text-4xl font-black text-[var(--accent)]"
                                            style={{ fontFamily: "var(--font-heading)" }}
                                        >
                                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1 uppercase tracking-wider font-medium">
                                            {t(`stats.${stat.key}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Highlights */}
                    <div className="md:col-span-2">
                        <AnimateOnScroll delay={0.15}>
                            <h3
                                className="text-lg font-bold mb-6 uppercase tracking-wider text-[var(--text-muted)]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {t("highlights.title")}
                            </h3>
                        </AnimateOnScroll>
                        <div className="space-y-4">
                            {highlights.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <AnimateOnScroll key={item.key} delay={0.2 + i * 0.08} variant="slideLeft">
                                        <div className="flex items-center gap-4 p-4 bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200 cursor-default group">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-sm font-semibold tracking-wide">
                                                {t(`highlights.${item.key}`)}
                                            </span>
                                        </div>
                                    </AnimateOnScroll>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
