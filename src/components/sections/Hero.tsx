"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
    const t = useTranslations("hero");
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
        },
    };

    const itemVariants = {
        hidden: shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
        },
    };

    const nameLetters = profile.name.split("");

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Accent glow */}
            <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.04] rounded-full blur-[120px]" />

            <motion.div
                className="section-container relative z-10 pt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-base font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    {t("greeting")}
                </motion.p>

                {/* Name — Massive Typography */}
                <motion.h1
                    variants={itemVariants}
                    className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    {nameLetters.map((letter, i) => (
                        <motion.span
                            key={i}
                            className="inline-block"
                            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: shouldReduceMotion ? 0 : 0.5 + i * 0.03,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Title */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[2px] bg-[var(--accent)]" />
                    <h2
                        className="text-xl md:text-2xl font-semibold text-[var(--text-muted)]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t("title")}
                    </h2>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed mb-10"
                >
                    {t("tagline")}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                    <a
                        href={profile.cvUrl}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[var(--accent-hover)] transition-all duration-200 cursor-pointer"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        <Download className="w-4 h-4" />
                        {t("cta.download")}
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--text)] text-[var(--text)] text-sm font-semibold tracking-wide uppercase hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-200 cursor-pointer"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t("cta.contact")}
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 cursor-pointer"
                    animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                >
                    <ArrowDown className="w-6 h-6 text-[var(--text-muted)] opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
