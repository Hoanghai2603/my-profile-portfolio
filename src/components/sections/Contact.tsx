"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { profile, socialLinks } from "@/data/profile";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
};

export function Contact() {
    const t = useTranslations("contact")

    return (
        <section id="contact" className="section-spacing">
            <div className="section-container">
                <AnimateOnScroll>
                    <h2
                        className="text-3xl md:text-5xl font-black mb-4 tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {t("heading")}
                        <span className="text-[var(--accent)]">.</span>
                    </h2>
                    <div className="w-16 h-[3px] bg-[var(--accent)] mb-4" />
                    <p className="text-base text-[var(--text-muted)] mb-6 max-w-md">
                        {t("subtitle")}
                    </p>
                </AnimateOnScroll>

                <div className="grid md:grid-cols-5 gap-12 md:gap-16">

                    {/* Contact info */}
                    <div className="md:col-span-2">
                        <AnimateOnScroll delay={0.2}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                                            {t("info.email")}
                                        </p>
                                        <a href={`mailto:${profile.email}`} className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer">
                                            {profile.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)]">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                                            {t("info.phone")}
                                        </p>
                                        <p className="text-sm font-medium text-[var(--text)]">{profile.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--accent)]/10 text-[var(--accent)]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">
                                            {t("info.location")}
                                        </p>
                                        <p className="text-sm font-medium text-[var(--text)]">{profile.location}</p>
                                    </div>
                                </div>

                                {/* Social links */}
                                <div className="pt-4 border-t border-[var(--border)]">
                                    <div className="flex gap-3">
                                        {socialLinks.map((link) => {
                                            const Icon = iconMap[link.icon];
                                            return (
                                                <a
                                                    key={link.platform}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-pointer"
                                                    aria-label={link.platform}
                                                >
                                                    {Icon && <Icon className="w-5 h-5" />}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
