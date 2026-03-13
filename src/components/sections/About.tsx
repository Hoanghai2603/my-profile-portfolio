"use client";

import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
    const t = useTranslations("about");

    return (
        <section id="about" className="section-spacing bg-[var(--surface)]">
            <div className="section-container max-w-4xl">
                <AnimateOnScroll>
                    <h2
                        className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        {t("heading")}
                        <span className="text-[var(--accent)]">.</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[var(--accent)] mb-10" />

                    <div className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed space-y-6">
                        <p className="whitespace-pre-line">{t("bio")}</p>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
